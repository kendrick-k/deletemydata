import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer le client Supabase
    const client = await serverSupabaseClient(event)
    
    // Récupérer les données du formulaire
    const body = await readBody(event)
    
    // Validation des données
    const { firstName, lastName, email, subject, message, acceptPrivacy } = body
    
    if (!firstName || !lastName || !email || !subject || !message || !acceptPrivacy) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs sont obligatoires'
      })
    }
    
    if (!['support', 'billing', 'partnership', 'press', 'legal', 'other'].includes(subject)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Sujet invalide'
      })
    }
    
    // Récupérer l'IP et User-Agent
    const ipAddress = getClientIP(event)
    const userAgent = getHeader(event, 'user-agent')
    
    // Insérer le message dans la base de données
    const { data, error } = await client
      .from('contact_messages')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase(),
        subject,
        message,
        accept_privacy: acceptPrivacy,
        ip_address: ipAddress,
        user_agent: userAgent,
        source: 'contact_form',
        status: 'new',
        priority: subject === 'legal' ? 'high' : 'medium'
      })
      .select()
      .single()
    
    if (error) {
      console.error('Erreur Supabase:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur lors de l\'enregistrement du message'
      })
    }
    
    // Optionnel : Envoyer une notification email (à implémenter plus tard)
    // await sendContactNotification(data)
    
    // Retourner le succès
    return {
      success: true,
      message: 'Message envoyé avec succès',
      id: data.id
    }
    
  } catch (error: any) {
    console.error('Erreur contact API:', error)
    
    // Si c'est déjà une erreur HTTP, la retourner
    if (error.statusCode) {
      throw error
    }
    
    // Sinon, créer une erreur générique
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur'
    })
  }
}) 