import {useQuery} from "react-query";
import {currentValues} from "../apis/posts-api";

export const useGetPostById = (id: string | undefined) => {
    return useQuery({
        queryKey: ["getForId", id],
        queryFn: () => {
            return currentValues(id)
        }

    })
};
