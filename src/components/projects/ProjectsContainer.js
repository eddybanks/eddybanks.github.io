import React, { Component } from 'react'
import Projects from './Projects'
import { Container } from 'reactstrap'

class ProjectsContainer extends Component {
  state = {
    projects: [
      { 
        id: 0,
        img: {
        src: 'https://photos.app.goo.gl/3GmDE6pjU5p34aDS8',
        alt: 'Hangout@229'
        },
        title: 'Hangout@229'
      },
      { 
        id: 1,
        img: {
        src: 'https://photos.app.goo.gl/3GmDE6pjU5p34aDS8',
        alt: 'Lippia Tea'
        },
        title: 'Lippia Tea'
      },
      { 
        id: 1,
        img: {
        src: 'https://photos.app.goo.gl/3GmDE6pjU5p34aDS8',
        alt: 'Lippia Tea'
        },
        title: 'Lippia Tea'
      }
    ]
  }

  render() {
    return (
      <Container>
        <Projects projects={this.state.projects} />
      </Container>
    )
  }
}

export default ProjectsContainer