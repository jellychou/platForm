import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const PostList: React.FC = () => {


    const postReducer = useAppSelector((state) => state.postReducer)
    const postList= postReducer.posts

    const go = useNavigate()
    return (
        <>
            {
                postList?.map((item:any) => {
                    const { title, content, id } = item
                    return (
                        <div className="w-100 bg-white shadow-md h-[60px] flex items-center justify-start px-2 mb-2" key={id}>
                            <div className="text-sky-500 font-bold">[{title}]</div>
                            <div onClick={ () => go(`/post/${id}`) } className="cursor-pointer pl-3 border-b-slate-500 hover:underline truncate w-10/12">
                                { content}
                            </div>
                        </div>)
                
            })}
        </>
    )
} 

export default PostList