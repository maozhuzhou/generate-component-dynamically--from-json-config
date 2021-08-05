import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App1 from "./App1"; //Use React.createElement() to render a component
import App2 from "./App2"; //Use React.createElement() to render a component
import App3 from "./App3"; //dynamically render the component(dom tree) based on a JSON config

 
ReactDOM.render(<App1 />, document.getElementById("root"));

 //ReactDOM.render(<App2 />, document.getElementById("root"));

//ReactDOM.render(<App3 />, document.getElementById("root"));