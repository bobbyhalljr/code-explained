import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const NavbarLanding = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <div className="navbar bg-base-100 py-4 sticky top-0 left-0 z-10">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost normal-case ml-2 lg:ml-10 text-xl">Code Assist</a>
            </div>
            <div className="navbar-end">
                {/* <a className="btn mr-10">Get started</a> */}
                {/* The button to open modal */}
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn mr-10">Get Started</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative flex flex-col justify-center items-center py-24">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className="container" style={{ padding: '50px 0 100px 0' }}>
                        {!session &&
                            <Auth redirectTo='https://code-explained.vercel.app/account' supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" provider={['github', 'google']}/>
                        }</div>
                        {/* <h3 className="text-2xl font-bold mb-6">Login</h3>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-6" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>                     */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLanding;