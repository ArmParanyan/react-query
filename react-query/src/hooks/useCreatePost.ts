import {useMutation} from "react-query";
import {IPost} from "../interfaces/interfaces";
import {createPost, editPost} from "../apis/posts-api";
import {useNavigate} from "react-router-dom";

export const useCreatePost = () => {

    const navigate = useNavigate();

    return useMutation(
        (postData: IPost) => createPost(postData),
        {
            // Add other configuration options as needed
            onSuccess: () => {
                navigate('/posts');
            },
        }
    );
}

