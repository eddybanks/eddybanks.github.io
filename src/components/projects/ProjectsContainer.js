import React, { Component } from 'react'
import Projects from './Projects'
import Example from './ProjectsCarousel'

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
      }
    ]
  }

  render() {
    return (
      // <Projects projects={this.state.projects} />
      <div style={{height: '56vh', padding: '2vh', backgroundColor: 'rgba(0,0,0,0.05)'}}>
        <p><italic>Unfortunately all my projects are currently being redone and will be properly displayed here by the end of May 2019!!</italic></p>
        <Example />
      </div>
    )
  }
}

export default ProjectsContainer