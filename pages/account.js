import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import SidebarLayout from '../components/SidebarLayout'
import Layout from '../components/Layout'

const Home = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <Layout>
            {!session ? (
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
            ) : (
                <Account session={session} />
            )}
        </Layout>
    )
}

export default Home