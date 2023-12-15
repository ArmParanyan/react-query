import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate deleniti dolores illum
                laudantium maiores, neque soluta. Accusamus autem eius, eligendi laborum magni neque officia omnis quod,
                tempore velit, vitae?
            </p>
            <button onClick={() => navigate("/posts")}>Click to open posts</button>

        </div>
    );
};

export default Home;