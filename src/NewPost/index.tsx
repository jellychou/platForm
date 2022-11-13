import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Headers from '../components/Headers'
import { useAppDispatch } from "../hooks";
import { addNewsPost } from '../slices/postSlice'



const NewPost: React.FC = () => {

    const dispatch = useAppDispatch()

    const [title, setTitle] = useState("")

    //const [select, setSelect] = useState('0')

    const [content, setContent] = useState("")

    //const items = [
    //    {
    //        id: 0,
    //        type: '心情'
    //    },
    //    {
    //        id: 1,
    //        type: '日記'
    //    },
    //    {
    //        id: 2,
    //        type: '學習'
    //    },
    //    {
    //        id: 3,
    //        type: '寵物'
    //    },
    //    {
    //        id: 4,
    //        type: '抒發'
    //    },
    //    {
    //        id: 5,
    //        type: '飲食'
    //    },
    //]

    const go = useNavigate()

    return (
        <>
            <Headers />
            <div className="flex justify-center">
                <div className="w-full lg:w-[1024px] mt-7 bg-white shadow-md p-10">
                    <form>
                        <label className="block mb-3">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            標題
                          </span>
                            <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setTitle(e.target.value)
                            }} name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="請輸入文章標題" />
                        </label>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">文章內容</label>
                        <textarea value={content} rows={20} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setContent(e.target.value)
                        }} className="mt-1 marker:block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="請輸入文章內容"></textarea>
                        <button type="button" className="block ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => {
                            dispatch(addNewsPost({ id: 0, content: content, title: title }))
                            go('/')
                            alert('新增成功')
                        }}>新增</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewPost
