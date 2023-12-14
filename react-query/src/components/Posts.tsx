import {useQuery} from "react-query";
import {displayValue} from "react-query/types/devtools/utils";


const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await res.json();
}

const Posts = () => {
    const {data, isLoading, isError} = useQuery(
        ["posts"],
        fetchPosts,
        {
            staleTime: 0,
            cacheTime: 20,
        })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>OOPS something went wrong</div>
    }

    return (
        <div>
            <ul>
                {
                    data.map((item: any) =>
                        (
                            <li
                                key={item.id}
                                style={{
                                    listStyle: "none",
                                }}
                            >
                                {item.title}

                                <button>Edit</button>
                                <button>Remove</button>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default Posts