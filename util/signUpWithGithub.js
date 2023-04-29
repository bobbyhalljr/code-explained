// Signup using Google
import { supabase } from '../lib/supabaseClient';

export async function signUpWithGithub() {

    const { error } = await supabase.auth.signInWithOAuth(
        {
            provider: 'github'
        },
        { redirectTo: 'http://localhost:3000/provider?refresh=true' }
    );
    if (error) {
        alert(error.message);
    }
}
