import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Layout from '../components/Layout'

const Home = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <Layout>
            {!session ? (
                <div className='w-3/5 my-auto mx-auto'>
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
                </div>
            ) : (
                <Account session={session} />
            )}
        </Layout>
    )
}

export default Home