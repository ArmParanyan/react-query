import React, {useState} from 'react';
import Loading from "./Loading";
import Error from "./Error";
import PostsList from "./PostsList";
import {Pagination} from "./Pagination";
import Search from "./Search";
import {usePosts} from "../hooks/usePosts";
import {CreatePostButton} from "./CreatePostButton";


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
            style={{
               display: "flex",
                flexDirection: "column",
                width: "400px",
                margin: "0 auto",
                gap: "20px",
        }}
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

        </div>
    );
};

export default Posts;
