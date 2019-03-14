import React, { Component } from 'react'
import Contact from './Contact'

class ContactContainer extends Component {
  state = {
    phoneNumber: '5055895577'
  }

  render() {
    return <Contact />
  }
}

export default ContactContainer
