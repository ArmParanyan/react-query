import {useEffect, useState} from "react";
import "./CreatePost.scss"


export const CreatePost = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    useEffect(() => {

    }, []);

    return (


        <div className="create-post-wrapper">
            <h2>Create post</h2>
            <form
                action=""
                className="create-post-form"
            >
                <input
                    type="text"
                    onChange={({target}) => setTitle(target.value)}
                />
                <textarea
                    name="textarea"
                    id="textarea-create-post"
                    cols={30}
                    rows={10}
                    onChange={({target}) => setBody(target.value)}>

                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
