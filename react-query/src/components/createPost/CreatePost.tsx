
import "./CreatePost.scss"
import {Field, Form, Formik} from "formik";


export const CreatePost = () => {




    return (


        <div className="create-post-wrapper">
            <h2>Create post</h2>

            <Formik
                initialValues={{
                    title: "",
                    body: "",
                }}
                onSubmit={() => console.log("formik")}
            >

                <Form className="create-form">
                    <div className="field-wrapper">
                        <h3>Title</h3>
                        <Field
                            type="text"
                            name="title"
                        />

                    </div>

                    <div>
                        <h3>Body</h3>
                        <Field
                            as="textarea"
                            type="text"
                            name="body"
                        />

                    </div>

                    <button
                        type="submit"
                        className="create-button"
                    >
                        Submit
                    </button>

                </Form>


            </Formik>


        </div>
    );
};



