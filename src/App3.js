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

const CardConfig = [
  {component: "title",
    children: "This title added by Lilly Zhou"
  },
  {    
    component: "card",
    children: [
      {
        component: "img",
        src:
          "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        component: "body",
        children: [
          {
            component: "title",
            children: "The dom tree is dynamically rendered based on a JSON config"
          },
          {
            component: "subtitle",
            children: "This is the subtitle"
          },
          {
            component: "text",
            children:
              "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            component: "button",
            children: "Click Me!"
          }
        ]
      }
    ]
  }
];

export default function App3() {
  return (
    <div className="App">
      <div className="card-container">
        {          
          CardConfig.map(config => RenderCard(config))        
        }
      </div>
    </div>
  );
}