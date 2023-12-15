import {createBrowserRouter} from "react-router-dom";
import PostDetails from "../components/PostDetails";
import Posts from "../components/Posts";
import React from "react";
import {CreatePost} from "../components/CreatePost";


export const router = createBrowserRouter([
    {

        path: "/posts",
        element: <Posts/>,
    },
    {
        path: "posts/:id",
        element: <PostDetails/>,
    },
    {
        path: "/create",
        element: <CreatePost />
    },
])