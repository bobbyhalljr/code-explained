import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const signOut = async () => {
    const supabase = useSupabaseClient();

    const { error } = await supabase.auth.signOut()
    if(error) {
        alert(error)
    }

}

