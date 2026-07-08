#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const AUTO_START = "<!-- search-console:auto:start -->";
const AUTO_END = "<!-- search-console:auto:end -->";
const DEFAULT_DAYS = 28;
const DEFAULT_ROW_LIMIT = 25;
const ADC_LOGIN_COMMAND =
  "gcloud auth application-default login --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters.readonly";
const GCLOUD_LOGIN_COMMAND = "gcloud auth login";
const QUOTA_PROJECT_PLACEHOLDER = "YOUR_PROJECT_ID";

const args = parseArgs(process.argv.slice(2));
const days = toPositiveInteger(args.days, DEFAULT_DAYS);
const rowLimit = toPositiveInteger(args.rowLimit, DEFAULT_ROW_LIMIT);
const gcloudBin = args.gcloud ?? process.env.GCLOUD_BIN ?? findGcloudBinary();
const quotaProject =
  args.quotaProject ??
  process.env.GOOGLE_CLOUD_QUOTA_PROJECT ??
  readAdcQuotaProject();
const endDate =
  args.endDate ?? formatDate(addDays(new Date(), -1));
const startDate =
  args.startDate ?? formatDate(addDays(parseDate(endDate), -(days - 1)));

const context = await createGoogleContext({
  gcloudBin,
  quotaProject,
});

if (args.root) {
  const rootDir = path.resolve(args.root);
  const projectDirs = findWorkspaceProjects(rootDir);

  if (projectDirs.length === 0) {
    console.log(`No package.json projects found under ${rootDir}`);
    process.exit(0);
  }

  let updatedCount = 0;
  let skippedCount = 0;

  for (const projectDir of projectDirs) {
    const result = await updateProject(projectDir, {
      context,
      days,
      endDate,
      rowLimit,
      startDate,
      siteUrl: args.site,
    });

    if (result.status === "skipped") {
      skippedCount += 1;
      console.log(`- ${path.basename(projectDir)}: skipped (${result.message})`);
      continue;
    }

    updatedCount += 1;
    console.log(
      `- ${path.basename(projectDir)}: ${result.status} -> ${result.reportPath}`,
    );
  }

  console.log(
    `Updated ${updatedCount} Search Console report(s), skipped ${skippedCount}.`,
  );
} else {
  const result = await updateProject(process.cwd(), {
    context,
    days,
    endDate,
    rowLimit,
    startDate,
    siteUrl: args.site,
  });

  if (result.status === "skipped") {
    console.log(`Search Console report skipped: ${result.message}`);
    process.exit(0);
  }

  console.log(`${result.status} -> ${result.reportPath}`);
}

async function createGoogleContext({ gcloudBin, quotaProject }) {
  let accessToken = "";
  let authError = "";

  try {
    accessToken = execFileSync(
      gcloudBin,
      ["auth", "application-default", "print-access-token"],
      { encoding: "utf8" },
    ).trim();
  } catch (error) {
    authError = commandErrorMessage(error);
  }

  let sites = [];
  let sitesError = "";

  if (accessToken) {
    const response = await fetchJson(
      "https://searchconsole.googleapis.com/webmasters/v3/sites",
      {
        accessToken,
        quotaProject,
      },
    );

    if (response.error) {
      sitesError = response.error;
    } else {
      sites = Array.isArray(response.payload.siteEntry)
        ? response.payload.siteEntry
        : [];
    }
  }

  return {
    accessToken,
    authError,
    gcloudBin,
    quotaProject,
    sites,
    sitesError,
  };
}

async function updateProject(projectDir, options) {
  const project = discoverProject(projectDir, options.siteUrl);

  if (!project.siteUrl) {
    return {
      message: "no site URL found",
      status: "skipped",
    };
  }

  const property = resolveSearchConsoleProperty(
    project.siteUrl,
    options.context.sites,
  );
  const setupError = buildSetupError(options.context);
  const report = setupError
    ? {
        error: setupError,
        rows: [],
      }
    : await fetchSearchAnalytics(property.apiSiteUrl, options.context.accessToken, {
        endDate: options.endDate,
        pageFilterUrl: property.pageFilterUrl,
        quotaProject: options.context.quotaProject,
        rowLimit: options.rowLimit,
        startDate: options.startDate,
      });

  updateProjectSearchConsoleDoc(project, report, {
    apiSiteUrl: property.apiSiteUrl,
    days: options.days,
    endDate: options.endDate,
    generatedAt: new Date().toISOString(),
    pageFilterUrl: property.pageFilterUrl,
    quotaProject: options.context.quotaProject,
    rowLimit: options.rowLimit,
    startDate: options.startDate,
  });

  return {
    reportPath: project.searchConsolePath,
    status: report.error ? `ERROR ${compactError(report.error)}` : "OK",
  };
}

function discoverProject(projectDir, overrideSiteUrl) {
  const docTargets = findDocTargets(projectDir);
  const existingReport = docTargets.find((target) =>
    existsSync(target.searchConsolePath),
  );
  const target =
    existingReport ??
    docTargets.find((candidate) => existsSync(candidate.docDir)) ??
    docTargets[0];
  const candidateFiles = [
    target.searchConsolePath,
    path.join(target.docDir, "distribution.md"),
    path.join(projectDir, "doc", "google-search-console.md"),
    path.join(projectDir, "DOC", "google-search-console.md"),
    path.join(projectDir, "docs", "google-search-console.md"),
    path.join(projectDir, "doc", "distribution.md"),
    path.join(projectDir, "DOC", "distribution.md"),
    path.join(projectDir, "docs", "distribution.md"),
    path.join(projectDir, ".env"),
    path.join(projectDir, ".env.local"),
    path.join(projectDir, ".env.example"),
    path.join(projectDir, "nuxt.config.ts"),
    path.join(projectDir, "nuxt.config.js"),
    path.join(projectDir, "next.config.js"),
    path.join(projectDir, "package.json"),
  ];
  const discoveredSiteUrl = candidateFiles.map(readSiteUrl).find(Boolean) ?? "";
  const siteUrl = normalizeSiteUrl(overrideSiteUrl) || discoveredSiteUrl;

  return {
    docDir: target.docDir,
    name: path.basename(projectDir),
    projectDir,
    searchConsolePath: target.searchConsolePath,
    siteUrl,
  };
}

function findDocTargets(projectDir) {
  return ["doc", "DOC", "docs"].map((name) => ({
    docDir: path.join(projectDir, name),
    searchConsolePath: path.join(projectDir, name, "google-search-console.md"),
  }));
}

function readSiteUrl(filePath) {
  if (!existsSync(filePath)) {
    return "";
  }

  if (path.basename(filePath) === "package.json") {
    try {
      const packageJson = JSON.parse(readFileSync(filePath, "utf8"));
      return normalizeSiteUrl(packageJson.homepage);
    } catch {
      return "";
    }
  }

  const content = readFileSync(filePath, "utf8");
  const envMatch = content.match(
    /(?:^|\n)(?:NUXT_PUBLIC_SITE_URL|NEXT_PUBLIC_SITE_URL|VITE_SITE_URL|PUBLIC_SITE_URL|SITE_URL|APP_URL|URL)\s*=\s*["']?([^"'\n#]+)["']?/,
  );
  const explicitConfigMatches = [
    ...content.matchAll(
      /(?:siteUrl|siteURL|baseUrl|baseURL|url)[^\n]*?["'](https?:\/\/[^"']+)["']/g,
    ),
  ].map((match) => match[1]);
  const canUseGenericUrl = /\.(?:md|markdown)$/i.test(filePath);
  const siteMatch =
    content.match(/(?:Site URL|URL)\s*:\s*(sc-domain:[^\s)]+)/i) ??
    content.match(/(?:Site URL|URL)\s*:\s*(https?:\/\/[^\s)]+)/i) ??
    (canUseGenericUrl ? content.match(/https?:\/\/[^\s)"']+/i) : null) ??
    content.match(/sc-domain:[^\s)"']+/i);
  const bareDomainMatch = content.match(
    /(?:Site URL|URL)\s*:\s*([a-z0-9.-]+\.[a-z]{2,})(?:\s|$|[),])/i,
  );
  return [
    envMatch?.[1],
    ...explicitConfigMatches,
    siteMatch?.[1],
    siteMatch?.[0],
    bareDomainMatch?.[1],
  ]
    .map(normalizeSiteUrl)
    .find(Boolean) ?? "";
}

function normalizeSiteUrl(value) {
  if (!value || typeof value !== "string") {
    return "";
  }

  let trimmed = value.trim().replace(/^["']|["']$/g, "");

  if (!trimmed) {
    return "";
  }

  if (trimmed.startsWith("sc-domain:")) {
    return trimmed.replace(/\/+$/, "");
  }

  if (/^[a-z0-9.-]+\.[a-z]{2,}\/?$/i.test(trimmed)) {
    trimmed = `https://${trimmed.replace(/\/+$/, "")}/`;
  }

  try {
    const parsed = new URL(trimmed);

    if (isRejectedSiteHost(parsed.hostname)) {
      return "";
    }

    parsed.hash = "";
    parsed.search = "";
    parsed.pathname = "/";
    return parsed.toString();
  } catch {
    return "";
  }
}

function isRejectedSiteHost(hostname) {
  const host = hostname.toLowerCase();

  return (
    host === "localhost" ||
    host === "0.0.0.0" ||
    host === "127.0.0.1" ||
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host === "placeholder.supabase.co" ||
    host === "your-project.supabase.co" ||
    host === "your-project-id.supabase.co"
  );
}

function parentDomain(hostname) {
  const parts = hostname.split(".").filter(Boolean);

  if (parts.length <= 2) {
    return "";
  }

  return parts.slice(-2).join(".");
}

function resolveSearchConsoleProperty(siteUrl, sites) {
  if (!sites.length) {
    return {
      apiSiteUrl: siteUrl,
      pageFilterUrl: '',
    }
  }

  if (siteUrl.startsWith('sc-domain:')) {
    return {
      apiSiteUrl: siteUrl,
      pageFilterUrl: '',
    }
  }

  const available = new Set(sites.map(site => site.siteUrl).filter(Boolean))
  const parsed = new URL(siteUrl)
  const host = parsed.hostname.replace(/^www\./, '')
  const parent = parentDomain(host)
  const parentDomainCandidate = parent ? `sc-domain:${parent}` : ''
  const domainCandidate = `sc-domain:${host}`

  if (available.has(domainCandidate)) {
    return {
      apiSiteUrl: domainCandidate,
      pageFilterUrl: '',
    }
  }

  if (parentDomainCandidate && available.has(parentDomainCandidate)) {
    return {
      apiSiteUrl: parentDomainCandidate,
      pageFilterUrl: siteUrl,
    }
  }

  const candidates = [
    siteUrl,
    `${parsed.protocol}//${host}/`,
    `${parsed.protocol}//www.${host}/`,
  ].filter(Boolean)
  const exactCandidate = candidates.find(candidate => available.has(candidate))

  if (exactCandidate) {
    return {
      apiSiteUrl: exactCandidate,
      pageFilterUrl: '',
    }
  }

  const matchingPrefix = sites
    .map(site => site.siteUrl)
    .filter((candidate) => {
      if (!candidate || candidate.startsWith('sc-domain:')) {
        return false
      }

      try {
        return new URL(candidate).hostname.replace(/^www\./, '') === host
      } catch {
        return false
      }
    })
    .sort((first, second) => first.length - second.length)[0]

  return {
    apiSiteUrl: matchingPrefix ?? siteUrl,
    pageFilterUrl: '',
  }
}


async function fetchSearchAnalytics(siteUrl, accessToken, options) {
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    siteUrl,
  )}/searchAnalytics/query`;
  const response = await fetchJson(endpoint, {
    accessToken,
    body: {
      dimensions: ["query"],
      ...(options.pageFilterUrl
        ? {
            dimensionFilterGroups: [
              {
                filters: [
                  {
                    dimension: "page",
                    expression: options.pageFilterUrl.replace(/\/$/, ""),
                    operator: "contains",
                  },
                ],
              },
            ],
          }
        : {}),
      endDate: options.endDate,
      rowLimit: options.rowLimit,
      startDate: options.startDate,
    },
    method: "POST",
    quotaProject: options.quotaProject,
  });

  if (response.error) {
    return {
      error: response.error,
      rows: [],
    };
  }

  return {
    rows: Array.isArray(response.payload.rows) ? response.payload.rows : [],
  };
}

async function fetchJson(url, options) {
  const headers = {
    Authorization: `Bearer ${options.accessToken}`,
    "Content-Type": "application/json",
  };

  if (options.quotaProject) {
    headers["X-Goog-User-Project"] = options.quotaProject;
  }

  const response = await fetch(url, {
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers,
    method: options.method ?? "GET",
  });

  if (!response.ok) {
    return {
      error: formatSearchConsoleError(
        response.status,
        response.statusText,
        await response.text(),
      ),
    };
  }

  return {
    payload: await response.json(),
  };
}

function updateProjectSearchConsoleDoc(project, report, options) {
  mkdirSync(project.docDir, { recursive: true });

  const existing = existsSync(project.searchConsolePath)
    ? readFileSync(project.searchConsolePath, "utf8")
    : defaultDocument(project);
  const autoBlock = buildAutoBlock(project, report, options);
  const nextContent = ensureSiteUrlHeader(
    replaceAutoBlock(existing, autoBlock),
    project.siteUrl,
  );

  writeFileSync(project.searchConsolePath, nextContent, "utf8");
}

function defaultDocument(project) {
  return `# Google Search Console

Site URL: ${project.siteUrl}

Ce document suit les requetes organiques Search Console du projet et sert de
base aux decisions de distribution, SEO et contenu.

${AUTO_START}
${AUTO_END}

## Notes manuelles

- Ajouter ici les decisions editoriales prises a partir des requetes.
`;
}

function replaceAutoBlock(content, autoBlock) {
  if (content.includes(AUTO_START) && content.includes(AUTO_END)) {
    return content.replace(
      new RegExp(`${escapeRegExp(AUTO_START)}[\\s\\S]*?${escapeRegExp(AUTO_END)}`),
      autoBlock,
    );
  }

  return `${content.trim()}\n\n${autoBlock}\n`;
}

function ensureSiteUrlHeader(content, siteUrl) {
  if (!siteUrl) {
    return content;
  }

  if (/^Site URL:\s*.+$/m.test(content)) {
    return content.replace(/^Site URL:\s*.+$/m, `Site URL: ${siteUrl}`);
  }

  return content.replace(/^# Google Search Console\s*$/m, `$&\n\nSite URL: ${siteUrl}`);
}

function buildAutoBlock(project, report, options) {
  const rows = normalizeRows(report.rows);
  const zeroClickRows = rows
    .filter((row) => row.impressions > 0 && row.clicks === 0)
    .slice(0, 10);
  const clickedRows = rows.filter((row) => row.clicks > 0).slice(0, 5);

  return `${AUTO_START}
## Derniere extraction automatique

- Projet : ${project.name}
- Site URL : ${project.siteUrl}
- Propriete API : ${options.apiSiteUrl}
${options.pageFilterUrl ? `- Filtre page : ${options.pageFilterUrl}\n` : ""}- Genere le : ${options.generatedAt}
- Periode : ${options.startDate} -> ${options.endDate} (${options.days} jours)
- Limite : ${options.rowLimit} requetes
- Quota project : ${options.quotaProject || "non configure"}
- Statut : ${report.error ? "auth/API a corriger" : "OK"}

${report.error ? `### Erreur\n\n\`\`\`text\n${report.error.trim()}\n\`\`\`\n\n` : ""}### Top requetes

${markdownTable(rows)}

### Opportunites sans clic

${markdownTable(zeroClickRows)}

### Requetes avec clic

${markdownTable(clickedRows)}

### Actions distribution

${buildActions(rows, report.error, options.quotaProject)}
${AUTO_END}`;
}

function normalizeRows(rows) {
  return rows
    .map((row) => ({
      clicks: Number(row.clicks ?? 0),
      ctr: Number(row.ctr ?? 0),
      impressions: Number(row.impressions ?? 0),
      position: Number(row.position ?? 0),
      query: String(row.keys?.[0] ?? ""),
    }))
    .filter((row) => row.query)
    .sort((first, second) => {
      if (second.impressions !== first.impressions) {
        return second.impressions - first.impressions;
      }

      return second.clicks - first.clicks;
    });
}

function markdownTable(rows) {
  if (rows.length === 0) {
    return "_Aucune donnee disponible._";
  }

  return [
    "| Requete | Clics | Impressions | CTR | Position |",
    "|---|---:|---:|---:|---:|",
    ...rows.map(
      (row) =>
        `| ${escapeTable(row.query)} | ${row.clicks} | ${row.impressions} | ${formatPercent(
          row.ctr,
        )} | ${formatNumber(row.position)} |`,
    ),
  ].join("\n");
}

function buildActions(rows, error, quotaProject) {
  if (error) {
    const projectId = quotaProject || QUOTA_PROJECT_PLACEHOLDER;
    const actions = [];

    if (/credentials|authenticated|token|auth|scope/i.test(error)) {
      actions.push(`- Relancer \`${ADC_LOGIN_COMMAND}\`.`);
    }

    if (/quota project/i.test(error) || !quotaProject) {
      actions.push(`- Connecter la CLI Google Cloud avec \`${GCLOUD_LOGIN_COMMAND}\`.`);
      actions.push(
        `- Configurer le quota project avec \`gcloud auth application-default set-quota-project ${projectId}\`.`,
      );
    }

    if (
      /SERVICE_DISABLED|accessNotConfigured|searchconsole\.googleapis\.com/i.test(error) ||
      !quotaProject
    ) {
      actions.push(
        `- Activer l'API Search Console avec \`gcloud services enable searchconsole.googleapis.com --project=${projectId}\`.`,
      );
    }

    actions.push(
      "- Verifier que le compte Google a acces a la propriete Search Console.",
    );

    return [...new Set(actions)].join("\n");
  }

  if (rows.length === 0) {
    return "- Aucune action : pas encore de donnees sur la periode.";
  }

  const opportunities = rows
    .filter((row) => row.impressions >= 2 && row.clicks === 0)
    .slice(0, 5)
    .map((row) => row.query);

  if (opportunities.length === 0) {
    return "- Surveiller les requetes avec clic et renforcer les pages deja positionnees.";
  }

  return opportunities
    .map(
      (query) =>
        `- Verifier si une page ou section cible deja "${query}", puis ajuster titre, intro, FAQ ou maillage interne.`,
    )
    .join("\n");
}

function buildSetupError(context) {
  if (!context.accessToken) {
    return context.authError || "Google Application Default Credentials are not configured.";
  }

  if (!context.quotaProject) {
    return "Google ADC is authenticated, but no quota project is configured. Set a quota project before calling the Search Console API.";
  }

  if (context.sitesError) {
    return context.sitesError;
  }

  return "";
}

function findWorkspaceProjects(rootDir) {
  if (!existsSync(rootDir)) {
    return [];
  }

  const excludedDirs = new Set([
    ".claude",
    ".git",
    ".netlify",
    ".nuxt",
    ".output",
    ".tmp",
    "_nitro",
    "dist",
    "node_modules",
  ]);
  const projects = [];

  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory() || excludedDirs.has(entry.name)) {
        continue;
      }

      const child = path.join(dir, entry.name);

      if (existsSync(path.join(child, "package.json"))) {
        projects.push(child);
      }

      walk(child);
    }
  };

  walk(rootDir);

  return projects.sort();
}

function parseArgs(values) {
  const parsed = {};

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];

    if (value === "--root") {
      parsed.root = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--site") {
      parsed.site = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--days") {
      parsed.days = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--row-limit") {
      parsed.rowLimit = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--start-date") {
      parsed.startDate = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--end-date") {
      parsed.endDate = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--gcloud") {
      parsed.gcloud = values[index + 1];
      index += 1;
      continue;
    }

    if (value === "--quota-project") {
      parsed.quotaProject = values[index + 1];
      index += 1;
    }
  }

  return parsed;
}

function findGcloudBinary() {
  const candidates = [
    "/opt/homebrew/bin/gcloud",
    "/usr/local/bin/gcloud",
    "gcloud",
  ];

  for (const candidate of candidates) {
    try {
      execFileSync(candidate, ["--version"], { stdio: "ignore" });
      return candidate;
    } catch {
      // Continue.
    }
  }

  return "gcloud";
}

function readAdcQuotaProject() {
  const home = process.env.HOME;

  if (!home) {
    return "";
  }

  const credentialsPath = path.join(
    home,
    ".config",
    "gcloud",
    "application_default_credentials.json",
  );

  if (!existsSync(credentialsPath)) {
    return "";
  }

  try {
    const credentials = JSON.parse(readFileSync(credentialsPath, "utf8"));
    return typeof credentials.quota_project_id === "string"
      ? credentials.quota_project_id
      : "";
  } catch {
    return "";
  }
}

function formatSearchConsoleError(status, statusText, body) {
  try {
    const parsed = JSON.parse(body);
    const error = parsed.error ?? {};
    const details = Array.isArray(error.details) ? error.details : [];
    const reason = details.find((detail) => detail.reason)?.reason;
    const message = [error.status, error.message, reason && `Reason: ${reason}`]
      .filter(Boolean)
      .join("\n");

    return `${status} ${statusText}${message ? `\n${message}` : ""}`;
  } catch {
    return `${status} ${statusText}: ${body}`;
  }
}

function commandErrorMessage(error) {
  const stderr = error?.stderr?.toString?.() ?? "";
  const stdout = error?.stdout?.toString?.() ?? "";
  const message = stderr || stdout || error?.message || String(error);

  return message.trim();
}

function compactError(error) {
  const firstLine = error.split("\n").find(Boolean) ?? "unknown";
  return `(${firstLine.slice(0, 120)})`;
}

function toPositiveInteger(value, fallback) {
  const number = Number(value);

  return Number.isFinite(number) && number > 0 ? Math.round(number) : fallback;
}

function parseDate(value) {
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function addDays(date, delta) {
  const nextDate = new Date(date);
  nextDate.setUTCDate(nextDate.getUTCDate() + delta);
  return nextDate;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatNumber(value) {
  return value.toFixed(1);
}

function escapeTable(value) {
  return value.replaceAll("|", "\\|");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
