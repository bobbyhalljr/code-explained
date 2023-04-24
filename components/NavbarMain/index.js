import { BsFillChatFill } from 'react-icons/bs'
import { BiMoneyWithdraw, BiLogOut } from 'react-icons/bi'
import { BsFillInfoCircleFill, BsFillGearFill } from 'react-icons/bs'

const NavbarMain = () => {
    return (
        <div>
            {/* NAVBAR */}
            <div className="navbar bg-base-100 z-20 fixed top-0">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Code Assist</a>
                </div>
                <div className="flex-none">
                    <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
            </div>
            {/* DRAWER */}
            <div className="drawer drawer-mobile z-20 fixed top-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                </div>

                {/* SIDE DRAWER */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 pt-10 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className="hover:bg-gray-200 hover:rounded-full mb-3"><a href='/chat'><BsFillChatFill className='ml-2' /> Chat</a></li>
                        {/* <li className="hover:bg-gray-200 hover:rounded-full mb-3"><a href='#'><BsFillInfoCircleFill className='ml-2' /> Resources</a></li> */}
                        <li className="hover:bg-gray-200 hover:rounded-full mb-3"><a href='/account'><BsFillGearFill className='ml-2' /> Settings</a></li>
                        <li className="hover:bg-gray-200 bg-blue-500 text-white hover:text-gray-700 rounded-full"><a><BiMoneyWithdraw className='ml-2' /> Get Credits</a></li>
                        <li className='hover:bg-gray-200 hover:rounded-full mt-32'><a><BiLogOut /> Logout</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default NavbarMain;
