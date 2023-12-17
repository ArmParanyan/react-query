import React, {useState} from 'react';
import Loading from "../Loading";
import Error from "../Error";
import PostsList from "../PostsList";
import {Pagination} from "../Pagination";
import Search from "../Search";
import {usePosts} from "../../hooks/usePosts";
import {CreatePostButton} from "../createPostButton/CreatePostButton";

import "./Posts.scss"
import {Outlet} from "react-router-dom";

const Posts: React.FC = () => {
    const [page, setPage] = useState(1);

    const {data: posts, isLoading, isError} = usePosts(page);


    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };


    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };


    return (
        <div
            className="posts-wrapper"

        >
            <h1>Posts</h1>
            <Search/>

            <CreatePostButton />

            {isLoading ? (
                <Loading/>
            ) : (isError ? (
                <Error/>
            ) : (
                <PostsList posts={posts}/>
            ))}


            <Pagination handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} page={page}/>

            {/*<Outlet />*/}
        </div>
    );
};

export default Posts;
