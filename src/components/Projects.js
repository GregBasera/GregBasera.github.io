import React from "react";
import { Alert, Badge, Button, Card, CardColumns, Container, Modal } from "react-bootstrap";
import { Panda1 } from "../images";

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
    },
    {
      title: "renty-dashboard",
      pills: [22, 9, 18, 19],
      description: `An Admin app to manage incoming and outgoing requests, content, and variables for the Renty stack. This app is used in-tandem with Renty's client mobile app.`,
      code: "https://github.com/GregBasera/Renty-dashboard",
    },
    {
      title: "panda-internal",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16],
      description: `A prototype system that aims to fill the role of being the Internal Sales Management Console for Pandalivery`,
      code: "https://github.com/GregBasera/panda-internal",
    },
    {
      title: "kmsta",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16],
      description: `A university project intended to be an exercise of the basics of Web Development.`,
      code: "https://bitbucket.org/GregBasera/project_kmsta/src/simplify/",
    },
    {
      title: "GLAG",
      pills: [21, 0, 3],
      description: `(Game of the Local Area Generals) Now you can play Game of the Generals over LAN.`,
      code: "https://bitbucket.org/GregBasera/project_gotg",
    },
    {
      title: "rumble-mines",
      pills: [21, 3],
      description: `A multiplayer vesion of Minesweeper. There are some compromises in the gameplay, but it's quite fun.`,
      code: "https://github.com/GregBasera/RumbleMines/",
    },
    {
      title: "silicon-based",
      pills: [21, 2],
      description: `My own take on some of the most widely known Machine Learning algorithms.`,
      code: "https://bitbucket.org/GregBasera/silicon-based",
    },
    {
      title: "fSNMP",
      pills: [21, 3],
      description: `A jerry-rigged Simple Network Management tool.`,
      code: "https://github.com/GregBasera/fSNMP",
    },
  ];

  const [modalShow, setModalShow] = React.useState(false);

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
                <Button className="ml-1" size="sm" variant="dark" onClick={() => setModalShow(true)}>
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

      {/* <CarouselModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Panda1} alt="carousel" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </CardColumns>
  );
}
