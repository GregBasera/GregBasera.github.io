import React from "react";
import { Alert, Badge, Button, Card, CardColumns, Container } from "react-bootstrap";
import {
  Blocks1,
  Blocks10,
  Blocks11,
  Blocks12,
  Blocks13,
  Blocks14,
  Blocks2,
  Blocks3,
  Blocks4,
  Blocks5,
  Blocks6,
  Blocks7,
  Blocks8,
  Blocks9,
  Glag1,
  Glag2,
  Glag3,
  Kmsta1,
  Kmsta2,
  Kmsta3,
  Mines1,
  Mines2,
  Panda1,
  Panda2,
  Panda3,
  Panda4,
  Panda5,
  Panda6,
  Renty1,
  Renty2,
  Renty3,
  Renty4,
  Renty5,
} from "../images";
import CarouselModal from "./CarouselModal";
import Gpic from "../G.png";

export default function Projects() {
  const pills = [
    "C", // 0
    "C++",
    "Python",
    "Java",
    "HTML",
    "CSS", // 5
    "Bootstrap",
    "Sass",
    "Javascript",
    "Reactjs",
    "JQuery", // 10
    "Electron",
    "PHP",
    "Codeigniter",
    "MySQL",
    "MongoDB", // 15
    "Apache",
    "Git",
    "Material-UI",
    "Firebase",
    "AWS", // 20
    "Desktop",
    "Web",
  ];
  const cards = [
    {
      title: "codeinblocks",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16, 20],
      description: `A Visual Programming Environment built to find out if Visualization, integrated in a granular discussion of concepts, is an effective tool in teaching novice programmers.`,
      code: "https://bitbucket.org/GregBasera/seniorproject/src/master/",
      clarray: [Blocks1, Blocks2, Blocks3, Blocks4, Blocks5, Blocks6, Blocks7, Blocks8, Blocks9, Blocks10, Blocks11, Blocks12, Blocks13, Blocks14],
    },
    {
      title: "renty-dashboard",
      pills: [22, 9, 18, 19],
      description: `An Admin app to manage incoming and outgoing requests, content, and variables for the Renty stack. This app is used in-tandem with Renty's client mobile app.`,
      code: "https://github.com/GregBasera/Renty-dashboard",
      clarray: [Renty1, Renty2, Renty3, Renty4, Renty5],
    },
    {
      title: "panda-internal",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16],
      description: `A prototype system that aims to fill the role of being the Internal Sales Management Console for Pandalivery`,
      code: "https://github.com/GregBasera/panda-internal",
      clarray: [Panda1, Panda2, Panda3, Panda4, Panda5, Panda6],
    },
    {
      title: "kmsta",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16],
      description: `A university project intended to be an exercise of the basics of Web Development.`,
      code: "https://bitbucket.org/GregBasera/project_kmsta/src/simplify/",
      clarray: [Kmsta1, Kmsta2, Kmsta3],
    },
    {
      title: "GLAG",
      pills: [21, 0, 3],
      description: `(Game of the Local Area Generals) Now you can play Game of the Generals over LAN.`,
      code: "https://bitbucket.org/GregBasera/project_gotg",
      clarray: [Glag1, Glag2, Glag3],
    },
    {
      title: "rumble-mines",
      pills: [21, 3],
      description: `A multiplayer vesion of Minesweeper. There are some compromises in the gameplay, but it's quite fun.`,
      code: "https://github.com/GregBasera/RumbleMines/",
      clarray: [Mines1, Mines2],
    },
    {
      title: "silicon-based",
      pills: [21, 2],
      description: `My own take on some of the most widely known Machine Learning algorithms.`,
      code: "https://bitbucket.org/GregBasera/silicon-based",
      clarray: [],
    },
    {
      title: "fSNMP",
      pills: [21, 3],
      description: `A jerry-rigged Simple Network Management tool.`,
      code: "https://github.com/GregBasera/fSNMP",
      clarray: [],
    },
  ];

  const [modalShow, setModalShow] = React.useState(false);
  const [carouselArray, setcarouselArray] = React.useState([Gpic]);

  return (
    <CardColumns>
      <Card bg="dark" body>
        <h5 className="mb-0 text-light">Projects</h5>
      </Card>
      {cards.map((i, index) => {
        return (
          <Card className="text-dark shadow" key={index.toString()}>
            <Card.Body>
              <h2>{i.title}</h2>
              <Card.Subtitle className="mb-2 text-muted">
                {i.pills.map((i2, index2) => {
                  return (
                    <Badge pill variant={i2 === 21 || i2 === 22 ? "secondary" : "info"} key={index2.toString()}>
                      {pills[i2]}
                    </Badge>
                  );
                })}
              </Card.Subtitle>
              <Card.Text>{i.description}</Card.Text>
              <Container className="d-flex justify-content-end p-0">
                <Button className="ml-1" size="sm" variant="dark" onClick={() => window.open(i.code, "_blank")}>
                  Code
                </Button>
                <Button
                  className="ml-1"
                  size="sm"
                  variant="dark"
                  onClick={() => {
                    setcarouselArray(i.clarray);
                    setModalShow(true);
                  }}
                  disabled={i.clarray.length === 0 ? true : false}>
                  Screenshots
                </Button>
              </Container>
            </Card.Body>
          </Card>
        );
      })}
      <Alert variant="info point8-fsize">
        <b>Apologies, </b>I lack the resources to host most of my projects like many full-stack devs do. Some screenshots and my contact info are provided if you want to learn more
        about them.
        <div className="text-right">
          <small>- Page last updated: Nov 9, 2020</small>
        </div>
      </Alert>

      <CarouselModal show={modalShow} onHide={() => setModalShow(false)} clarray={carouselArray} />
    </CardColumns>
  );
}
