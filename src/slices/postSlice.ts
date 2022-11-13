import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Post = {
    id: number;
    title: string;
    content: string;
};


type postState = {
    posts: Post[];
};



const initialState: postState = {
    posts: [
        {
            id: 0,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 1,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 2,
            title: '日記',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 3,
            title: '學習',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 4,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 5,
            title: '學習',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 6,
            title: '學習',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 7,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 8,
            title: '寵物',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 9,
            title: '學習',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 10,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 11,
            title: '日記',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 12,
            title: '抒發',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 13,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 14,
            title: '寵物',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 15,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 16,
            title: '飲食',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 17,
            title: '心情',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 18,
            title: '飲食',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        },
        {
            id: 19,
            title: '寵物',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim, sequi et nemo maxime doloribus cupiditate ipsam iure, aut nisi corporis, deserunt eaque consequuntur maiores impedit odit possimus. Tenetur, maiores.',
        }
    ]
}

export const postSlice: any = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addNewsPost: (state, action: PayloadAction<any>) => {
            action.payload.id = state.posts.length
            state.posts.push(action.payload)
        },
    },
})

export const { addNewsPost } = postSlice.actions;
export default postSlice.reducer;