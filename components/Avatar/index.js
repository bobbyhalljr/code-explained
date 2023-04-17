const Avatar = () => {
    return (
        <>
        <div className="dropdown dropdown-bottom dropdown-end">
            {/* <label tabIndex={0} className="btn m-1">Click</label> */}
            <div tabIndex={0} className="avatar ml-4 shadow-xl rounded-full m-1">
                <div className="w-12 h-12 rounded-full bg-blue-300 shadow-sm">
                    <img className="border-none" src="/cat.jpg" />
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-[117px]">
                <li><a>Login</a></li>
                <li><a>Dashboard</a></li>
            </ul>
        </div>
        </>
    )
}

export default Avatar;