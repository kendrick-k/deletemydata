export default defineEventHandler(async (event) => {
  try {
    // Récupérer le body de la requête
    const body = await readBody(event)
    
    // Validation des données requises
    if (!body.email || !body.first_name || !body.last_name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données manquantes',
        data: {
          message: 'Email, prénom et nom sont requis'
        }
      })
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email invalide',
        data: {
          message: 'Format d\'email invalide'
        }
      })
    }

    // Récupérer la configuration Supabase
    const config = useRuntimeConfig()
    const supabaseUrl = config.public.supabaseUrl
    const supabaseServiceKey = config.supabaseServiceRoleKey

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Configuration Supabase manquante')
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur de configuration',
        data: {
          message: 'Erreur de configuration du serveur'
        }
      })
    }

    // Créer le client Supabase avec la clé de service
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Préparer les données pour l'insertion
    const waitingListData = {
      email: body.email.toLowerCase().trim(),
      first_name: body.first_name.trim(),
      last_name: body.last_name.trim(),
      company_name: body.company_name?.trim() || null,
      company_domain: body.company_domain?.trim() || null,
      request_type: body.request_type || 'deletion',
      additional_details: body.additional_details?.trim() || null,
      source: body.source || 'website',
      user_agent: body.user_agent || null,
      ip_address: body.ip_address || null
    }

    // Vérifier si l'email existe déjà
    const { data: existingUser, error: checkError } = await supabase
      .from('waiting_list_rgpd')
      .select('id, status')
      .eq('email', waitingListData.email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 = "no rows returned", ce qui est normal
      console.error('Erreur lors de la vérification:', checkError)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur de base de données',
        data: {
          message: 'Erreur lors de la vérification de l\'email'
        }
      })
    }

    let result

    if (existingUser) {
      // Mettre à jour l'utilisateur existant
      const { data, error } = await supabase
        .from('waiting_list_rgpd')
        .update({
          ...waitingListData,
          status: 'pending', // Remettre en attente
          updated_at: new Date().toISOString()
        })
        .eq('id', existingUser.id)
        .select()
        .single()

      if (error) {
        console.error('Erreur lors de la mise à jour:', error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Erreur de base de données',
          data: {
            message: 'Erreur lors de la mise à jour de l\'inscription'
          }
        })
      }

      result = data
    } else {
      // Insérer un nouvel utilisateur
      const { data, error } = await supabase
        .from('waiting_list_rgpd')
        .insert([waitingListData])
        .select()
        .single()

      if (error) {
        console.error('Erreur lors de l\'insertion:', error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Erreur de base de données',
          data: {
            message: 'Erreur lors de l\'inscription'
          }
        })
      }

      result = data
    }

    // Log de succès
    console.log(`Inscription liste d'attente réussie: ${waitingListData.email}`)

    // Retourner le succès
    return {
      success: true,
      message: 'Inscription réussie',
      data: {
        id: result.id,
        email: result.email,
        status: result.status
      }
    }

  } catch (error) {
    console.error('Erreur API waiting-list:', error)
    
    // Si c'est déjà une erreur HTTP, la relancer
    if (error.statusCode) {
      throw error
    }

    // Sinon, créer une erreur générique
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur',
      data: {
        message: 'Une erreur inattendue s\'est produite'
      }
    })
  }
}) 