import React from 'react'
import { Row, Col, Button, Form, Input, FormGroup, FormText } from 'reactstrap'

import styles from '../../stylesheets/Contact.module.css'

const contact = props => {
  let contactStyle = styles.Contact + " justify-content-center"
  return (
    <div className={contactStyle}>
      <Row>
        <Col md={{size: 6, offset: 3}}>
          <p>For any job offers or questions, feel free to drop me a line!</p>
          <Form method="POST" action="https://formspree.io/eddy.devv@gmail.com">
            <FormGroup>
              <Input type="text" placeholder="Email Address?" name="contactEmailAddress" id="contactEmail" />
            </FormGroup>
            <FormGroup>
              <Input type="textarea" placeholder="Message?" name="contactText" id="contactText" />
            </FormGroup>
            <Button outline color="secondary">Deliver</Button>
          </Form>
        </Col>
        {/* <Col>
          <p>Still working on contact stuff!! :-)</p>
          <p>For now, you can contact me via my linkedin or email: </p>
          <p><a href={props.contactInfo.linkedin} target="_blank">{props.contactInfo.linkedin}</a></p>
          <p>{props.contactInfo.email}</p>
        </Col> */}
      </Row>
    </div>
  )
} 

export default contact