import React from 'react'
import { Row, Col, Button, Form, Input, FormGroup, FormText } from 'reactstrap'
import { Link } from 'react-router-dom'

import styles from '../../stylesheets/Contact.module.css'

const contact = props => {
  return (
    <div className={styles.Contact}>
      <Row>
        {/* <Col md-6>
          <p>For any job offers or questions, feel free to drop me a line!</p>
          <Form>
              <Input type="text" placeholder="Input your Email Address!" />
              <Input type="textarea" placeholder="Click here to start your message!" name="contactText" id="contactText" />
              <Button>--></Button>
          </Form>
        </Col> */}
        <Col>
          <p>Still working on contact stuff!! :-)</p>
          <p>For now, you can contact me via my linkedin or email: </p>
          <p><a href={props.contactInfo.linkedin} target="_blank">{props.contactInfo.linkedin}</a></p>
          <p>{props.contactInfo.email}</p>
        </Col>
      </Row>
    </div>
  )
} 

export default contact