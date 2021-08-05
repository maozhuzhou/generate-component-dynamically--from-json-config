import React from "react";
import "./styles.css";
import RenderCard from "./RenderCard";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";


export default function App2() {
  return (
    <div className="App">
      <div className="card-container">
        {
          //This will create a dom tree:
          //Card is the root, it has two children : CardImg and CardBody
          //The CardBody has four children: ...
          React.createElement(
            Card, 
            {},  
            [    
              React.createElement(
                CardImg, { 
                  src: "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                }         
              ),       
              React.createElement(
                CardBody, { }, 
                [
                  React.createElement(
                    CardTitle, { }, "This is a CardTitle"          
                  ),
                  React.createElement(
                    CardTitle, { }, "This is a subtitle"          
                  ),
                  React.createElement(
                    CardText, { }, "This is a CardText ddddd"          
                  ),
                  React.createElement(
                    Button, { }, "This is a Button"          
                  )
                ]
              )
            ]
          ) 
        
        }
      </div>
    </div>
  );
}