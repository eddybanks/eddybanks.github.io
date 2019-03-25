import React, { Component } from 'react'
import Contact from './Contact'

class ContactContainer extends Component {
  state = {
    contactInfo: {
      linkedin: 'https://www.linkedin.com/in/eddybanks03',
      github: 'https://www.github.com/eddybanks',
      email: 'eddybanks03@gmail.com'
    }
  }

  render() {
    return <Contact contactInfo={this.state.contactInfo} />
  }
}

export default ContactContainer
