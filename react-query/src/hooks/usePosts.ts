import {useQuery} from "react-query";
import {getPosts} from "../apis/posts-api";

export const usePosts = (page: number) => useQuery(['posts', page], () => getPosts(page), {
    keepPreviousData: true,
});