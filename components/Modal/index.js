import React from 'react';
import ChatWindow from '../ChatWindow';

const Modal = () => {
    return (
        <>
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn w-1/2 mx-auto my-auto">Start Chat</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Start your chat below!</h3>
                <p className="py-4">Ask me anything ...</p>
                    <textarea
                        className="textarea textarea-bordered bg-gray-200 text-gray-900 font-mono w-full placeholder-gray-500"
                        rows="5" cols='70'
                        type="textarea"
                        name="code"
                        placeholder="Debug this code ... [Insert Code Here]">
                        {/* // value={codeInput}
                        // onChange={(e) => setCodeInput(e.target.value)}> */}
                    </textarea>
                    <div className="form-control mt-6 w-full">
                        <button className="btn bg-gray-600 shadow-2xl">Submit</button>
                    </div>
            </div>
        </div>
        </>
        
    )
}

export default Modal;