import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "SCDoc",
      description: "Sistema de Contol Documental",
      imgUrl: projImg1,
      link1: "https://github.com/JulioMendozaC/SCDOC.git",
      link2: "https://scgdoc.000webhostapp.com/includes/login.php"
    },
    {
      title: "App de Tareas",
      description: "Aplicacion para la administrcion de tares",
      imgUrl: projImg2,
      link1: "https://github.com/JulioMendozaC/TareasReact.git",
      link2: "https://juliomendozac.github.io/TareasReact/"
    },
    {
      title: "Agenda de Citas",
      description: "Aplicacion para la administracion de pacientes",
      imgUrl: projImg3,
      link1: "https://github.com/JulioMendozaC/citasReact.git",
      link2: "https://main--heartfelt-yeot-c8c865.netlify.app"
    },
    {
      title: "Gastos",
      description: "Aplicacion para la administracion de pacientes",
      imgUrl: projImg4,
      link1: "https://github.com/JulioMendozaC/PresupuestosReact.git",
      link2: "https://proyectopresu.netlify.app"
    },
    {
      title: "Cotizador",
      description: "Aplicacion para cotizador de seguro para autos",
      imgUrl: projImg5,
      link1: "https://github.com/JulioMendozaC/CotisadorCarros.git",
      link2: "https://cotizadorcarrosreact.netlify.app/"
    },
    {
      title: "Api Breakin Bad",
      description: "Aplicacion creada para el consumo de la api de brakin bad que nos arroja frases aleatorias",
      imgUrl: projImg6,
      link1: "https://github.com/JulioMendozaC/ApiBreakin.git",
      link2: ""
    },
  
  ];

  return (
    <section className="project" id="Proyectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 mt-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;
