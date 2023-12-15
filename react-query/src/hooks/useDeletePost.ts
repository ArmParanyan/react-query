import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {IPost} from "../interfaces/interfaces";
import {deletePost} from "../apis/posts-api";

export const useDeletePost = () => {

    const navigate = useNavigate();

    return useMutation(
        (postData: IPost) => deletePost(postData),
        {
            // Add other configuration options as needed
            onSuccess: () => {
                navigate('/posts');
            },
        }
    );
}