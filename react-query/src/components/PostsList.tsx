import React, {FC} from "react";
import {IPost} from "../interfaces/interfaces";
import {Link} from "react-router-dom"

interface PostsListProps {
    posts: IPost[] | undefined;
}

const PostsList: FC<PostsListProps> = ({posts}) => {
    return (
        <>
            <ul>
                {posts?.map((item: any) => (
                        <li key={item.id}>
                            <Link to={`/posts/${item.id}`}><strong>{item.title}</strong></Link>
                            <p>{item.body}</p>
                        </li>
                ))}
            </ul>
        </>
    );
};

export default PostsList