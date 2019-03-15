import React, { Component } from 'react'
import Projects from './Projects'

class ProjectsContainer extends Component {
  state = {
    projects: [
      { img: {
        src: 'http://i.imgur.com/B0gV7Gq.png',
        alt: 'Hangout@229'
        },
        title: 'Hangout@229'
      }
    ]
  }
  render() {
    return (
      <Projects projects={this.state.projects} />
    )
  }
}

export default ProjectsContainer