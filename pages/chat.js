import NavbarMain from '../components/NavbarMain'

export default function Chat() {
    return (
        <>
            <NavbarMain />
            <div className=''>
                {/* CHAT HEADER */}
                {/* <div className="fixed z-10 bg-gray-100 right-0 top-20 px-4 py-1 border border-b-2 shadow-sm flex justify-start h-24 lg:h-32">
                    <div className="avatar placeholder flex justify-start items-center">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16 mr-3">
                            <span className="text-xl">BH</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg lg:text-2xl">Bobby Hall</h2>
                            <p className="lg:text-lg text-gray-400">Software Engineer</p>
                        </div>
                    </div>
                </div> */}
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
                <div className="fixed bottom-0 w-full flex flex-col items-center bg-base-200 py-6 border border-t-2 lg:h-[30%]">
                    <div className='w-full flex justify-center'>
                        <textarea className="textarea textarea-bordered border-4 w-[90%] max-w-xl lg:h-32 lg:w-2/5" placeholder="Enter text here ..."></textarea>
                    </div>
                    <div className="w-full flex justify-center items-center mt-8">
                        <button className="w-2/5 max-w-xl lg:w-2/5 btn">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
