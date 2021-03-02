import React from 'react';

import './App.css';
import {HashRouter} from "react-router-dom";
import Routes from "./ui/routes/Routes";
import Header from "./ui/header/Header";

function App() {
    return (
        <div>
            <HashRouter>
               <Header/>
                <Routes/>

            </HashRouter>
        </div>
    );
}

export default App;
