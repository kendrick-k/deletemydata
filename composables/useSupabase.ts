export const useSupabase = () => {
  const { $supabase } = useNuxtApp()
  return $supabase
}

export const useSupabaseUser = () => {
  const { $supabase } = useNuxtApp()
  return $supabase.auth.getUser()
}

export const useSupabaseAuth = () => {
  const { $supabase } = useNuxtApp()
  return $supabase.auth
}

export const useSupabaseDatabase = () => {
  const { $supabase } = useNuxtApp()
  return $supabase.from
} 