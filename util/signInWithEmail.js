import supabase from '../lib/supabaseClient'

export async function signInWithEmail(email) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'localhost:3000/account',
      },
    })
}