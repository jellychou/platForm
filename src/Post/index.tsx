import Headers from '../components/Headers';
import { useParams } from 'react-router-dom';
import { useAppSelector } from "../hooks";

const Post: React.FC = () => {
    const postReducer = useAppSelector((state) => state.postReducer)
    const postList = postReducer.posts
    const { id } = useParams();
    console.log(postList[id])
    
    return (
        <>
            <Headers />
            <div className="flex justify-center">
                <div className="w-full lg:w-[1024px] mt-7 bg-white shadow-md">
                    {/*<p>{postList[id].title}</p>
                    <div>{ postList[id].content }</div>*/}
                </div>
            </div>
        </>
    )
}

export default Post