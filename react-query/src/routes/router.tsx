import {createBrowserRouter} from "react-router-dom";
import PostDetails from "../components/PostDetails";
import Posts from "../components/posts/Posts";
import React from "react";
import {CreatePost} from "../components/createPost/CreatePost";
import Home from "../components/home/Home";
import PageNotFound from "../components/pageNotFound/PageNotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {

        path: "/posts",
        element: <Posts/>,
    },
    // {
    //     path: "/posts/*",
    //     element: <PageNotFound />
    // },
    {
        path: "posts/:id",
        element: <PostDetails/>,
    },

    // {
    //     path: "/posts/:id/*",
    //     element: <PageNotFound />
    // },
    {
        path: "/create",
        element: <CreatePost/>
    },
    {
        path: "*",
        element: <PageNotFound />
    }


])