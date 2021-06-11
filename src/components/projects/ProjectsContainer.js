import React, { Component } from "react";
import Projects from "./Projects";
import { Container } from "reactstrap";
import schooladmin from "../../assets/schooladmin.png";
import crwneddy from "../../assets/crwneddy.png";
import skywatcher from "../../assets/skywatcher.png";
import edmkatrivia from "../../assets/edmkatrivia.png";

class ProjectsContainer extends Component {
  state = {
    projects: [
      {
        id: 0,
        img: {
          src: skywatcher,
          alt: "Skywatcher Weather Web App",
        },
        title: "Skywatcher",
        url: "https://skywatcher.netlify.app/",
      },
      {
        id: 1,
        img: {
          src: schooladmin,
          alt: "School Admin",
        },
        title: "School Admin",
        url: "https://paper-huts.github.io/school-admin",
      },
      {
        id: 2,
        img: {
          src: crwneddy,
          alt: "Crwn Clothing",
        },
        title: "Crwn Clothing",
        url: "https://crwneddy.herokuapp.com/",
      },
      {
        id: 2,
        img: {
          src: edmkatrivia,
          alt: "Edmka Trivia App",
        },
        title: "Trivia App",
        url: "https://edmka-trivia.netlify.app/",
      },
    ],
  };

  render() {
    return (
      <Container>
        <Projects projects={this.state.projects} />
        <hr />
        <p>
          You can follow my{" "}
          <a
            href="https://github.com/eddybanks"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          to check out other projects I'm working on!!
        </p>
      </Container>
    );
  }
}

export default ProjectsContainer;
