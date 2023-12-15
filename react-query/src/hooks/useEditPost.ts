import {useMutation} from "react-query";
import {IPost} from "../interfaces/interfaces";
import {editPost} from "../apis/posts-api";
import {useNavigate} from "react-router-dom";

export const useEditPost = () => {

    const navigate = useNavigate();

    return useMutation(
        (postData: IPost) => editPost(postData),
        {
            // Add other configuration options as needed
            onSuccess: () => {
                navigate('/posts');
            },
        }
    );
}

