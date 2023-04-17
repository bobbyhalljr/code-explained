import React from 'react'
import Modal from '../Modal'
const ChatWindow = () => {
    return (
        <div>
            {/* <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
            </div> */}
            <Modal />
            {/* <div className='w-full fixed bottom-0 flex flex-col items-center mb-16'>
                <div className='w-2/4'>
                    <textarea
                        className="textarea textarea-bordered bg-gray-200 text-gray-900 font-mono w-full placeholder-gray-500"
                        rows="5" cols='70'
                        type="textarea"
                        name="code"
                        placeholder="Debug this code ... [Insert Code Here]"
                        value={codeInput}
                        onChange={(e) => setCodeInput(e.target.value)}>
                    </textarea>
                </div>
                <div className="form-control mt-6 w-2/4">
                    <button className="btn bg-gray-600 shadow-2xl">Submit</button>
                </div>
            </div> */}
        </div>
    )
}

export default ChatWindow;