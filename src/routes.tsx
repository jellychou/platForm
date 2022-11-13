import type { RouteObject } from "react-router-dom";
import Home from "./Home/index";
import Post from './Post/index'
import NewPost from './NewPost/index'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/post/:id",
    element: <Post />,
    children: [],
  },
  {
    path: "/newPost",
    element: <NewPost />,
    children: [],
  },

];

export default routes;
