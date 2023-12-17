import {useNavigate} from "react-router-dom";

export const CreatePostButton = () => {

    const navigate = useNavigate();

    return (
        <div className="create-post-button-wrapper">
            <button className="create-post-button"
                    onClick={() => navigate("/create")}
            >
                Create
            </button>
        </div>
    );
};
