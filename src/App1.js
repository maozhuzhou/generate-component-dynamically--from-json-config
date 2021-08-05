import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button
} from "reactstrap";


export default function App1() {
  return (
    <div className="App">
      <div className="card-container">
        {
          React.createElement(
            Button, { }, "This is a Button"          
          )        
        }
      </div>
    </div>
  );
}