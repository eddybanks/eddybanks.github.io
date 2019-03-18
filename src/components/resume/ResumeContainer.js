import React, { Component } from 'react'
import Resume from './Resume'

class ResumeContainer extends Component {
  state = {
    resume: [
      { id: 0, type: 'section', title: 'Edwin Agbenyega', 
        content: [
          'https://www.linkedin.com/in/eddybanks03',
          'https://github.com/eddybanks',
          'eddybanks03@gmail.com'
        ] },
      { id: 1, type: 'section', title: 'Summary', 
        content: ['Software Developer with experience in rails web application development, database management as well as data visualization and analytics. Team player with good problem solving skills and a yearning to learn and acquire new skills.'] },
      { id: 2, type: 'section', title: 'Skills', 
        content: [
          'Programming Languages: Python, Ruby, Java, C, C++, R (tidyverse)',
          'Web Development: Ruby on rails, HTML5, CSS3, JQuery, React.js, Bootstrap, Webpack, GraphQL',
          'Database Management and Data Analytics: PostgreSQL, Oracle, MySQL, MongoDB, Tableau',
          'Project Management & Version Control Tools: Slack, Trello, Asana, TargetProcess, Git, GitHub'
        ] },
      { id: 3, type: 'section', title: 'Work Experience', 
        content: [''] },
      { id: 4, type: 'section', title: 'Education', 
        content: [''] },
      { id: 5, type: 'section', title: 'Languages', 
        content: [''] },
      { id: 5, type: 'section', title: 'References', 
        content: ['References available upon request!'] }
    ]
  }
  render() {
    return <Resume page={this.state.resume} />
  }
}

export default ResumeContainer