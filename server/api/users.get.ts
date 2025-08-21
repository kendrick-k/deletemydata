export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    
    // Use service role key for admin-level access
    const supabase = createClient(
      config.public.supabaseUrl,
      config.supabaseServiceRoleKey
    )
    
    // Example: Fetch users from a 'profiles' table
    // Note: You'll need to create this table in your Supabase database
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(10)
    
    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      })
    }
    
    return {
      users: data,
      count: data?.length || 0
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Internal server error'
    })
  }
}) 