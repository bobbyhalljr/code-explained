import ChatAlt from "../components/ChatAlt"
import NavbarMain from '../components/NavbarMain'

export default function Chat() {

    return (
        <div>
            {/* NAVBAR */}
            <div className="navbar bg-base-100 z-0 fixed top-0">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
            </div>
            {/* DRAWER */}
            <div className="drawer drawer-mobile z-10 fixed top-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    
                    {/* CHAT HEADER */}
                    <div className="px-4 py-1 border border-b-2 shadow-sm w-full h-32 flex tiems-center">
                        <div className="avatar placeholder flex justify-start items-center">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16 mr-3">
                                <span className="text-xl">JO</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg lg:text-2xl">Bobby Hall</h2>
                                <p className="lg:text-lg text-gray-400">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    {/* CHAT CONTENT */}
                    <div className="overflow-auto">
                        Chat Content
                    </div>
                    {/* CHAT FOOTER */}
                    <div className="fixed bottom-0 w-full flex flex-col justify-center items-center bg-base-200 py-10 border border-t-2">
                        <textarea className="textarea textarea-bordered border-4 w-3/4 h-32 lg:w-2/5" placeholder="Enter text here ..."></textarea>
                        <div className="w-full flex justify-center items-center mt-8">
                            <button className="w-2/5 btn">Submit</button>
                        </div>
                    </div>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
                
                </div>
            </div>
        </div>
    )
}
