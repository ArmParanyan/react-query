import {IPost} from "../interfaces/interfaces";
import exp from "node:constants";

export const getPosts = async (page: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    const data: IPost[] = await response.json();
    return data;
};

export const currentValues = async (id: string | undefined) => {
    if (!id) {
        throw new Error("id not found")
    }
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await res.json() as IPost
    } catch (error) {
        throw error
    }
}

export const editPost = async (data: IPost,) => {

    console.log(data);
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
            method: "PUT",
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: data.userId
            })
        });
        return await res.json();
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (data: IPost) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
            method: "DELETE",
        })

    } catch (error) {
        throw error
    }
}

export const createPost = async (data: IPost) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userID: data.userId,
                id: data.id,
            })
        })
    } catch (error) {
        throw error;
    }
}