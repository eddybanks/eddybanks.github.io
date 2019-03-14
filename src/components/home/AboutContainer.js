import React, { Component } from 'react'
import About from './About'

class AboutContainer extends Component {
  state = {
    title: "About Me",
    content: [
      "Some text about me",
      "More text about me",
      "Me me me me me!"
    ]
  }

  render() {
    return <About title={this.state.title} content={this.state.content} />
  }
}

export default AboutContainer