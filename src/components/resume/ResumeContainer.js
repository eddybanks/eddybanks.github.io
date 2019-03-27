import React, { Component } from 'react'
import Resume from './Resume'

class ResumeContainer extends Component {
  state = {
    resume: [
      { id: 0, type: 'section', title: 'Edwin Agbenyega', 
        content: [
          { details: 'https://www.linkedin.com/in/eddybanks03' },
          { details: 'https://github.com/eddybanks' },
          { details: 'eddybanks03@gmail.com' }
        ] 
      },
      { id: 1, type: 'section', title: 'Summary', 
        content: [
          { details: 'Software Developer with experience in rails web application development, database management as well as data visualization and analytics. Team player with good problem solving skills and a yearning to learn and acquire new skills.' }
        ] 
      },
      { id: 2, type: 'section', title: 'Skills', 
        content: [
          { title: 'Programming Languages: ', details: 'Python, Ruby, Java, C, C++, R (tidyverse)' },
          { title: 'Web Development: ', details: 'Ruby on rails, HTML5, CSS3, JQuery, React.js, Bootstrap, Webpack, GraphQL' },
          { title: 'Database Management and Data Analytics: ', details: 'PostgreSQL, Oracle, MySQL, MongoDB, Tableau' },
          { title: 'Project Management & Version Control Tools: ', details: 'Slack, Trello, Confluence, Git, GitHub' }
        ] 
      },
      { id: 3, type: 'section', title: 'Work Experience', 
        content: [
          { title: 'Institutional Researcher: ', details: 'University of New Mexico (Feb 27, 2017 ~ present)', start_date: 'Feb 27, 2017', end_date: 'Ongoing' },
          { title: 'Research Assistant: ', details: 'University of New Mexico (Feb 11, 2015 ~ Dec 16, 2016)', start_date: 'Feb 11, 2015', end_date: 'Dec 16, 2016' }
        ] },
      { id: 4, type: 'section', title: 'Education', 
        content: [
          { title: 'MSc. Computer Engineering: ', details: 'University of New Mexico (Jan 15, 2015 ~ Jul 31, 2017)', start_date: 'Jan 15, 2015', end_date: 'Jul 31, 2017' },
          { title: 'BSc. Computer Engineering: ', details: 'Chungnam National University (Mar 11, 2011 ~ Feb 25, 2015)', start_date: 'Mar 11, 2011', end_date: 'Feb 25, 2015' }
        ] },
      { id: 5, type: 'section', title: 'Languages', 
        content: [
          { title: 'English: ', details: 'Native' },
          { title: 'Korean: ', details: 'Higher Intermediate / Professional' },
          { title: 'Japanese: ', details: 'Lower Intermediate / Conversational' },
          { title: 'French: ', details: 'Lower Intermediate / Conversational' }
        ] },
      { id: 5, type: 'section', title: 'References', 
        content: [{ details: 'References available upon request!' }] }
    ]
  }
  render() {
    return <Resume page={this.state.resume} />
  }
}

export default ResumeContainer