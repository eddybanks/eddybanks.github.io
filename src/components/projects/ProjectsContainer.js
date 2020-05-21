import React, { Component } from 'react'
import Projects from './Projects'
import { Container } from 'reactstrap'
import schooladmin from '../../assets/schooladmin.png'
import hangout229 from '../../assets/hangout229.png'
import kirtlandlogistics from '../../assets/kirtlandlogistics.png'
import portfolio from '../../assets/portfolio.png'

class ProjectsContainer extends Component {
  state = {
    projects: [
      { 
        id: 0,
        img: {
        src: schooladmin,
        alt: 'School Admin'
        },
        title: 'School Admin',
        url: 'https://paper-huts.github.io/noble-dbms-app'
      },
      { 
        id: 1,
        img: {
        src: hangout229,
        alt: 'Hangout@229'
        },
        title: 'Hangout@229',
        url: 'https://eddybanks.github.io/hangout229'
      },
      { 
        id: 2,
        img: {
        src: portfolio,
        alt: 'Lippia Tea'
        },
        title: 'Portfolio Site',
        url: 'https://eddybanks.github.io/portfolio'
      },
      { 
        id: 3,
        img: {
        src: kirtlandlogistics,
        alt: 'Kirtland Logistics'
        },
        title: 'Kirtland Logistics',
        url: 'https://eddybanks.github.io/kirtland-logistics'
      },
      // { 
      //   id: 4,
      //   img: {
      //   src: paperhuts,
      //   alt: 'Paper Huts'
      //   },
      //   title: 'Paper Huts',
      //   url: 'https://paperhuts.com'
      // }
    ]
  }

  render() {
    return (
      <Container>
        <Projects projects={this.state.projects} />
        <p>You can follow my <a href='https://github.com/eddybanks' target='_blank' rel='noopener noreferrer'>github</a> to check out other projects I'm working on!!</p>
      </Container>
    )
  }
}

export default ProjectsContainer