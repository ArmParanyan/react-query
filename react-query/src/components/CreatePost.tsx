import {useState} from "react";

export const CreatePost = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")



    return (


        <>
            <h2>Create post</h2>
            <form action=""
                  style={{display: "flex", flexDirection: "column", width: "400px", margin: "0 auto", gap: "20px"}}>
                <input type="text" onChange={({target}) => setTitle(target.value)}/>
                <textarea name="" id="" cols={30} rows={10} onChange={({target}) => setBody(target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
