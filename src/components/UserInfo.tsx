import { useNavigate } from "react-router-dom"

const UserInfo: React.FC = () => {

    const go = useNavigate()
    return (
        <div className="mt-6 ml-6 shadow-lg box-border p-2">
            <div className=" border-b-2 border-gray-100 flex items-center">
                <div className="w-[60px] h-[60px] overflow-hidden rounded-full flex items-center justify-center border-2 border-gray-300 border-solid mt-5 mb-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
                <div className="text-center ml-3">
                    <p className="font-bold">Jelly_01</p>
                    <p className="text-gray-400 text-xs">前端工程師</p>
                </div>
            </div>
            <div>
                <p className="text-sky-500 cursor-pointer underline my-3" onClick={ () => go('/newPost')}>新增文章</p>
            </div>
        </div>
    )
}

export default UserInfo