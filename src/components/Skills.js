import React from "react";
import { Button } from "react-bootstrap";

export default function Skills() {
  const iconNames = [
    "c-plain",
    "cplusplus-plain",
    "python-plain",
    "java-plain",
    "html5-plain",
    "css3-plain",
    "bootstrap-plain",
    "sass-original",
    "javascript-plain",
    "react-original",
    "jquery-plain",
    "electron-original",
    "php-plain",
    "codeigniter-plain",
    "mysql-plain",
    "mongodb-plain",
    "apache-plain",
    "git-plain",
    "nodejs-plain",
    "express-original",
  ];
  // some PLangs have no available icons
  const links = [
    {
      pnglink: "https://img.icons8.com/color/48/000000/material-ui.png",
      alt: "material-ui",
    },
    {
      pnglink: "https://img.icons8.com/color/48/000000/firebase.png",
      alt: "firebase",
    },
    {
      pnglink: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
      alt: "aws",
    },
  ];

  return (
    <div>
      {iconNames.map((i, index) => {
        return (
          <Button className="btn-light" key={index.toString()} title={i.split("-")[0].toUpperCase()}>
            <i className={`pl-icon-3 devicon-${i} colored`}></i>
          </Button>
        );
      })}
      {links.map((i, index) => {
        return (
          <Button className="btn-light" key={index.toString()} title={i.alt.toUpperCase()}>
            <img src={i.pnglink} alt={i.alt} />
          </Button>
        );
      })}
    </div>
  );
}
