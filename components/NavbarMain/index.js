import { BsFillChatFill } from 'react-icons/bs'
import { BiMoneyWithdraw, BiLogOut } from 'react-icons/bi'
import ChatAlt from '../ChatAlt';

const NavbarMain = () => {
    return (
        <>
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full flex flex-col items-center justify-center">
                {/* Page content here  */}
                <div className="navbar bg-base-100 py-4 fixed top-0 left-0 z-20">
                    <div className="navbar-start">
                        <a href='/' className="btn btn-ghost normal-case ml-2 lg:ml-10 text-xl">Code Assist</a>
                    </div>
                    <div className="navbar-end flex ml-auto mr-10">
                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
            </div>

            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-gray-800 text-white text-base active:bg-gray-600">
                    {/* Sidebar content here */}
                    <li>
                        <div className="">
                            <a href='/' className="btn btn-ghost normal-case ml-2 lg:ml-10 text-xl">Code Assist</a>
                        </div>
                    </li>
                    <div className=''></div>
                    <li className="hover:bg-gray-600 hover:rounded-full"><a href='/chat'><BsFillChatFill className='ml-2' /> Chat</a></li>
                    {/* <li className="hover:bg-gray-800 hover:rounded-full"><a>Sidebar Item 2</a></li> */}
                    <li className="hover:bg-gray-600 bg-blue-600 rounded-full mt-6"><a><BiMoneyWithdraw className='ml-2' /> Get Credits</a></li>
                    <li className='hover:bg-gray-600 hover:rounded-full fixed bottom-0 left-0 right-0 mx-4 mb-8'><a><BiLogOut /> Logout</a></li>
                </ul>

            </div>
        </div>
        </>
    )
}

export default NavbarMain;
