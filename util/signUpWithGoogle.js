// Signup using Google
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export async function signUpWithGoogle() {
    const supabase = useSupabaseClient()

    const { error } = await supabase.auth.signIn(
        {
            provider: 'google'
        },
        { redirectTo: 'http://localhost:3000/provider?refresh=true' }
    );
    if (error) {
        alert(error.message);
    }
}
