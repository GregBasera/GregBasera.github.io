import { Button, Col, Container, Row } from "react-bootstrap";

import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Gicon from "./G.png";
import resume from "./Resume_CV.pdf";
import "./styles/main.css";

function App() {
  return (
    <Container className="panel p-0" fluid>
      <Row className="panel" noGutters>
        <Col sm={12} md={6} className="py-2 bg-light text-dark">
          <Container>
            <img height="50" className="rounded" src={Gicon} alt="Gweg" />
          </Container>

          <Container className="introductions d-flex flex-wrap align-content-center">
            <Container>
              <Row className="mb-5">
                <Col sm={12} md>
                  <h1 className="display-2 text-sm-center text-md-right">Greg Basera</h1>
                </Col>
                <Col sm={12} md className="d-flex flex-wrap align-content-around py-3">
                  <p className="text-sm-center text-md-left">
                    Hello! Welcome to my Porfolio, a catalogue of the things I do. <br /> Contact me:
                    <a href="mailto: basera.gg@gmail.com"> basera.gg@gmail.com</a>.
                  </p>

                  <Container className="p-0 d-flex justify-content-between">
                    <Button variant="outline-dark align-self-center" onClick={() => window.open(resume, "_blank")}>
                      Résumé
                    </Button>

                    <Container className="p-0 d-flex justify-content-end">
                      <Button variant="light" title="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/greg-emerson-basera-ab1660190/", "_blank")}>
                        <i className="pl-icon-2 devicon-linkedin-plain colored"></i>
                      </Button>
                      <Button variant="light" title="Github" onClick={() => window.open("https://github.com/GregBasera", "_blank")}>
                        <i className="pl-icon-2 devicon-github-plain colored"></i>
                      </Button>
                      <Button variant="light" title="Bitbucket" onClick={() => window.open("https://bitbucket.org/GregBasera/", "_blank")}>
                        <i className="pl-icon-2 devicon-bitbucket-plain colored"></i>
                      </Button>
                    </Container>
                  </Container>
                </Col>
              </Row>
            </Container>

            <Container>
              <h2 className="text-center mb-3">Full-Stack Developer</h2>
            </Container>

            <Container className="mb-3 text-center">
              <Skills />
            </Container>
          </Container>
        </Col>

        <Col sm={12} md={6} className="bg-light text-dark">
          <Container className="project-area py-3">
            <Projects />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
