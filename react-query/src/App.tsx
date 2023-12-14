import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import Search from "./components/Search";
import Posts from "./components/Posts";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Search />
                <Posts />
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
