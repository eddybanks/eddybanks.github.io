import React, { Component } from 'react'
import About from './About'

class AboutContainer extends Component {
  state = {
    title: "About Me",
    content: [
      "I'm Edwin Agbenyega, a software developer",
      "I've been working as a data analyst for the past three years and have an even greater passion for web development!",
      "I enjoy every step of the full stack development process and I am currently looking to find a job that would enable me to grow as a developer"
    ]
  }

  render() {
    return <About title={this.state.title} content={this.state.content} />
  }
}

export default AboutContainer