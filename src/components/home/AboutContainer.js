import React, { Component } from 'react'
import About from './About'

class AboutContainer extends Component {
  state = {
    title: "About Me",
    content: [
      "I'm Edwin Agbenyega, a software developer",
      "I've been working as a data analyst for the past two years but still feel like a newbie fresh out of grad school and hoping to gain some more experience out there!",
      "I'm looking for a slight career change...eager to learn and be part of some exciting projects out there!"
    ]
  }

  render() {
    return <About title={this.state.title} content={this.state.content} />
  }
}

export default AboutContainer