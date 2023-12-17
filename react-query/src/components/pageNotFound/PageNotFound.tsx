import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <title>Page Not Found</title>


            <h1>Oops! Page Not Found</h1>
            <p>Sorry, but the page you are looking for might be in another castle.</p>
            <p>Here are a few things you can try:</p>
            <ul>
                <li>Check the URL for typos and try again.</li>
                <li>Return to the <a href="/">homepage</a>.</li>
                <li>Contact the website administrator for assistance.</li>
            </ul>
        </div>
);
};

export default PageNotFound