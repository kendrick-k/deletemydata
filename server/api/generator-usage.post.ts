import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { companyName, companyDomain, requestType, userEmail, additionalDetails } = body

    // Validation des données requises
    if (!companyName) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Company name is required'
      })
    }

    // Récupérer les informations de l'utilisateur
    const userAgent = getHeader(event, 'user-agent') || 'unknown'
    const clientIP = getClientIP(event) || 'unknown'

    // Préparer les données pour Supabase
    const usageData = {
      company_name: companyName,
      company_domain: companyDomain || null,
      request_type: requestType || 'deletion',
      user_email: userEmail || null,
      user_agent: userAgent,
      ip_address: clientIP,
      source: 'website',
      additional_details: additionalDetails || null
    }

    // Insérer dans Supabase
    const supabase = serverSupabaseClient(event)
    const { data, error } = await supabase
      .from('generator_usage')
      .insert(usageData)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Database error'
      })
    }

    // Retourner le succès
    return {
      success: true,
      data: data[0],
      message: 'Generator usage recorded successfully'
    }

  } catch (error: any) {
    console.error('Generator usage API error:', error)
    
    // Retourner l'erreur appropriée
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
}) 