import ChatAlt from "../components/ChatAlt"
import NavbarMain from '../components/NavbarMain'
import { BsFillChatFill } from 'react-icons/bs'
import { BiMoneyWithdraw, BiLogOut } from 'react-icons/bi'
import { BsFillInfoCircleFill } from 'react-icons/bs'

export default function Chat() {

    return (
        <div>
            {/* NAVBAR */}
            <div className="navbar bg-base-100 z-0 fixed top-0">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Code Assist</a>
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
                    <div className="fixed z-10 bg-gray-100 top-30 px-4 py-1 border border-b-2 shadow-sm w-full h-24 lg:h-32 flex tiems-center">
                        <div className="avatar placeholder flex justify-start items-center">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16 mr-3">
                                <span className="text-xl">BH</span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-lg lg:text-2xl">Bobby Hall</h2>
                                <p className="lg:text-lg text-gray-400">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    {/* CHAT CONTENT */}
                    <div className="chat chat-start overflow-y-scroll m-4 bg-local mt-[30%] lg:mt-[20%]">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://picsum.photos/200/300" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Obi-Wan Kenobi
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">You were the Chosen One!</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    <div className="chat chat-end pb-[50rem]">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://picsum.photos/200/300" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">I hate you!</div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                    {/* CHAT FOOTER */}
                    <div className="fixed bottom-0 left-0 right-0 w-full flex flex-col justify-center items-center bg-base-200 py-6 border border-t-2 lg:h-[30%]">
                        <textarea className="textarea textarea-bordered border-4 w-[90%] max-w-xl h-32 lg:w-2/5" placeholder="Enter text here ..."></textarea>
                        <div className="w-full flex justify-center items-center mt-8">
                            <button className="w-2/5 max-w-xl lg:w-2/5 btn">Submit</button>
                        </div>
                    </div>

                </div>
                {/* SIDE DRAWER */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 pt-10 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className="hover:bg-gray-200 hover:rounded-full mb-3"><a href='#'><BsFillChatFill className='ml-2' /> Chat</a></li>
                        <li className="hover:bg-gray-200 hover:rounded-full mb-6"><a href='#'><BsFillInfoCircleFill className='ml-2' /> Resources</a></li>
                        <li className="hover:bg-gray-200 bg-blue-500 text-white hover:text-gray-700 rounded-full"><a><BiMoneyWithdraw className='ml-2' /> Get Credits</a></li>
                        <li className='hover:bg-gray-200 hover:rounded-full mt-32'><a><BiLogOut /> Logout</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
