import React from "react";
import { Badge, Button, Card, CardColumns, Container } from "react-bootstrap";

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
    },
    {
      title: "renty-dashboard",
      pills: [22, 9, 18, 19],
      description: `An Admin app to manage incoming and outgoing requests, content, and variables for the Renty stack. This app is used in-tandem with Renty's client mobile app.`,
    },
    {
      title: "panda-internal",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16],
      description: `A prototype system that aims to fill the role of being the Internal Sales Management Console for Pandalivery`,
    },
    {
      title: "kmsta",
      pills: [22, 4, 5, 6, 8, 10, 12, 13, 14, 16],
      description: `A university project intended to be an exercise of the basics of Web Development.`,
    },
    {
      title: "GLAG",
      pills: [21, 0, 3],
      description: `(Game of the Local Area Generals) Now you can play Game of the Generals over LAN.`,
    },
    {
      title: "rumble-mines",
      pills: [21, 3],
      description: `A multiplayer vesion of Minesweeper. There are some compromises in the gameplay, but it's quite fun.`,
    },
    {
      title: "silicon-based",
      pills: [21, 2],
      description: `My own take on some of the most widely known Machine Learning algorithms.`,
    },
    {
      title: "fSNMP",
      pills: [21, 3],
      description: `A jerry-rigged Simple Network Management tool.`,
    },
  ];

  return (
    <CardColumns>
      {cards.map((i) => {
        return (
          <Card className="text-dark">
            <Card.Body>
              <h2>{i.title}</h2>
              <Card.Subtitle className="mb-2 text-muted">
                {i.pills.map((i2) => {
                  return (
                    <Badge pill variant={i2 === 21 || i2 === 22 ? "secondary" : "danger"}>
                      {pills[i2]}
                    </Badge>
                  );
                })}
              </Card.Subtitle>
              <Card.Text>{i.description}</Card.Text>
              <Container className="d-flex justify-content-end p-0">
                <Button className="ml-1" size="sm" variant="dark">
                  Code
                </Button>
                <Button className="ml-1" size="sm" variant="dark">
                  Screenshots
                </Button>
              </Container>
            </Card.Body>
          </Card>
        );
      })}
    </CardColumns>
  );
}
