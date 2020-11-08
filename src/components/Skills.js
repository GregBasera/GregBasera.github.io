import React from "react";
import { Button } from "react-bootstrap";

export default function Skills() {
  const iconNames = [
    "devicon-c-plain colored",
    "devicon-cplusplus-plain colored",
    "devicon-python-plain colored",
    "devicon-java-plain colored",
    "devicon-html5-plain colored",
    "devicon-css3-plain colored",
    "devicon-bootstrap-plain colored",
    "devicon-sass-original colored",
    "devicon-javascript-plain colored",
    "devicon-react-original colored",
    "devicon-jquery-plain colored",
    "devicon-electron-original colored",
    "devicon-php-plain colored",
    "devicon-codeigniter-plain colored",
    "devicon-mysql-plain colored",
    "devicon-mongodb-plain colored",
    "devicon-apache-plain colored",
    "devicon-git-plain colored",
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
      {iconNames.map((i) => {
        return (
          <Button className="btn-light" title="C">
            <i className={`pl-icon ${i}`}></i>
          </Button>
        );
      })}
      {links.map((i) => {
        return (
          <Button className="btn-light">
            <img src={i.pnglink} alt={i.alt} />
          </Button>
        );
      })}
    </div>
  );
}
