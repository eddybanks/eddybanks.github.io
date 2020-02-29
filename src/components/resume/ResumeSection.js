import React, { Fragment } from 'react'
import styles from '../../stylesheets/Resume.module.css'
import { Row, Col } from 'reactstrap'

const resumeSection = props => (
  <div className={styles.ResumeSection}>
    <h4>{props.title}</h4><hr />
    {props.content.map(line => { return (
      <Fragment>
        <Row>
          <Col md="4" className={styles.contentTitle}>{line.title}</Col>
          <Col md="8">{line.details}</Col>
        </Row>
      </Fragment>
    )})}
  </div>
)

export default resumeSection