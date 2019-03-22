import React, { Component } from 'react'
import Projects from './Projects'
import Example from './ProjectsCarousel'

class ProjectsContainer extends Component {
  state = {
    projects: [
      { 
        id: 0,
        img: {
        src: 'http://i.imgur.com/B0gV7Gq.png',
        alt: 'Hangout@229'
        },
        title: 'Hangout@229'
      },
      { 
        id: 1,
        img: {
        src: 'http://i.imgur.com/B0gV7Gq.png',
        alt: 'Lippia Tea'
        },
        title: 'Lippia Tea'
      }
    ]
  }

  render() {
    return (
      // <Projects projects={this.state.projects} />
      <div style={{height: '54vh', padding: '2vh', backgroundColor: 'rgba(0,0,0,0.2)'}}>
        <Example />
      </div>
    )
  }
}

export default ProjectsContainer