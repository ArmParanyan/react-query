import {useNavigate} from "react-router-dom";

export const CreatePostButton = () => {

    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <button style={{
                display: "flex",
                width: "150px",
                justifyContent: "center"

            }}

                    onClick={() => navigate("/create")}
            >
                Create
            </button>
        </div>
    );
};
