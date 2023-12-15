import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useGetPostById} from '../hooks/useGetPostById';
import {useEditPost} from "../hooks/useEditPost";
import Loading from "./Loading";
import {useQueryClient} from "react-query";
import {useDeletePost} from "../hooks/useDeletePost";
import {throws} from "node:assert";

const PostDetails: FC = () => {
    const {id} = useParams<{ id: string }>();
    const {data, isLoading} = useGetPostById(id);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const queryClient = useQueryClient();

    const {mutateAsync: editPostMutateAsync} = useEditPost();
    const {mutateAsync: deletePostMutateAsync} = useDeletePost();

    useEffect(() => {
        if (data?.title && data?.body) {
            setTitle(data.title);
            setBody(data.body);
        }
    }, [data, isLoading]);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <h2>Post Details</h2>
            <p>Post ID: {id}</p>

            <form
                style={{display: 'flex', flexDirection: 'column', width: '500px', margin: '0 auto', gap: '8px'}}
            >
                <input type="text" value={title} onChange={({target}) => setTitle(target.value)}/>

                <textarea
                    name="textarea"
                    id="textarea"
                    cols={30}
                    rows={10}
                    value={body}
                    onChange={({target}) => setBody(target.value)}
                />
                <button
                    type="button"
                    onClick={() => {
                        if (data) {
                            editPostMutateAsync({...data, title, body})
                                .then(() => queryClient.invalidateQueries({queryKey: ["posts"]}))
                                .catch((error) => {
                                    throw error;
                                })
                        }
                    }}
                >
                    Update
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (data) {
                            deletePostMutateAsync({...data})
                                .then(() => queryClient.invalidateQueries({queryKey: ["posts"]}))
                                .catch((error) => {
                                    throw error
                                })
                        }
                    }
                    }>
                    Delete
                </button>
            </form>
        </div>
    );
};

export default PostDetails;
