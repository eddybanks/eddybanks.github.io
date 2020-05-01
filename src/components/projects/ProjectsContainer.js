import React, { Component } from 'react'
import Projects from './Projects'
import { Container } from 'reactstrap'
import hangout229 from '../../assets/hangout229.png'
import kirtlandlogistics from '../../assets/kirtlandlogistics.png'
import portfolio from '../../assets/portfolio.png'

class ProjectsContainer extends Component {
  state = {
    projects: [
      { 
        id: 0,
        img: {
        src: hangout229,
        alt: 'Hangout@229'
        },
        title: 'Hangout@229',
        url: 'https://eddybanks.github.io/hangout229'
      },
      { 
        id: 1,
        img: {
        src: portfolio,
        alt: 'Lippia Tea'
        },
        title: 'Portfolio Site',
        url: 'https://eddybanks.github.io/portfolio'
      },
      { 
        id: 1,
        img: {
        src: kirtlandlogistics,
        alt: 'Kirtland Logistics'
        },
        title: 'Kirtland Logistics',
        url: 'https://eddybanks.github.io/kirtland-logistics'
      }
    ]
  }

  render() {
    return (
      <Container>
        {/* <Projects projects={this.state.projects} /> */}
        <p>Will be displayed soon!!</p>
        <p>For now you can follow my <a href='https://github.com/eddybanks' target='_blank'>github</a> to check out projects I'm working on!!</p>
      </Container>
    )
  }
}

export default ProjectsContainer