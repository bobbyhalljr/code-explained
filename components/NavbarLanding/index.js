import { useState } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { getURL } from 'next/dist/shared/lib/utils'
import { signInWithEmail } from '../../util/signInWithEmail'
import { router } from 'next/router'
import Avatar from '../Avatar'
import { RiAccountCircleFill } from 'react-icons/ri'


const NavbarLanding = () => {
    const session = useSession()
    const supabase = useSupabaseClient()
    const user = useUser()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSignin = async () => {

        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if(error) {
            alert(error)
        }
    }
    {console.log(user)}

    return (
        <div className="navbar bg-base-100 dark:bg-gray-800 py-4 sticky top-0 left-0 z-10">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost normal-case ml-2 lg:ml-10 text-xl">Code Assist</a>
            </div>
            <div className="navbar-end">
                {/* <a className="btn mr-10">Get started</a> */}
                {/* The button to open modal */}
                {/* The button to open modal */}
                {session ? 
                <a href='/account'>
                    <img className='w-12 h-12 lg:mr-10 rounded-full' src={user?.user_metadata?.avatar_url}/>
                </a>
                
                 : <a href='/account'><RiAccountCircleFill className='w-12 h-12 text-gray-500 lg:mr-10'/></a>}

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative flex flex-col justify-center items-center py-24">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <div className="container" style={{ padding: '50px 0 100px 0' }}>
                        {!session ?
                            <Auth redirectTo='/account' supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" providers={['github', 'google']}/>
                            : <h1 className='text-center'>You are already signed in <a className='text-blue-500 underline' href='/account'>Go to Account page</a></h1>
                        }
                        </div> */}
                        {/* <button className='btn' onClick={() => signUpWithGithub()}>Sign In with Github</button> */}
                        <h3 className="text-2xl font-bold mb-6">Login</h3>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Example@gmail.com" className="input input-bordered w-full max-w-xs mb-6" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="abc123" className="input input-bordered w-full max-w-xs" />
                            <button onClick={async () => {
                                const { error } = await supabase.auth.signInWithPassword({
                                email,
                                password,
                                });
                                if (error) alert(error.message);
                                // push to home page
                                router.push("/account");
                            }} className='btn mt-12'>Login</button>
                            <button onClick={async () => {
                                const { error } = await supabase.auth.signUp({
                                email,
                                password,
                                });
                                if (error) alert(error.message);
                                // push to home page
                                router.push("/account");
                            }} className='btn mt-12'>Signup</button>
                            {/* <p>Forgot your password? </p> */}
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLanding;