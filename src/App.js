import { Col, Container, Row } from "react-bootstrap";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Gicon from "./G.png";
import "./styles/main.css";

function App() {
  return (
    <Container className="panel p-0" fluid>
      <Row className="panel" noGutters>
        <Col sm={12} md={6} className="py-2 bg-light text-dark">
          <Container>
            <img height="50" className="rounded" src={Gicon} alt="Gweg" />
          </Container>

          <Container>
            <Row className="my-5">
              <Col sm={12} md>
                <h1 className="display-2 text-right">Greg Basera</h1>
              </Col>
              <Col sm={12} md>
                <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deserunt incidunt praesentium quae, earum</p>
              </Col>
            </Row>
          </Container>

          <h2 className="text-center mb-3">Full-Stack Developer</h2>

          <Container className="mb-3 text-center">
            <Skills />
          </Container>
        </Col>

        <Col sm={12} md={6} className="py-2 bg-dark text-light">
          <Container>
            <h2 className="text-center">Projects</h2>
          </Container>

          <Container className="project-area">
            <Projects />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
