import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Store from './Store'

import "./index.css";
import App from "./App";

const render = 
<Store>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Store>

ReactDOM.render(render, document.getElementById("root"));

