import React from 'react'
import Project from './Project/Project'
import styles from '../../stylesheets/Projects.module.css';
import { Row, Col } from 'reactstrap'

const projects = (props) => {
  return (
    <Row className={styles.Projects}>
      {props.projects.map(project => (
        <Col xs="6" md="4">
          <Project img={project.img} title={project.title} key={project.id} url={project.url} />
        </Col>
      ))}      
    </Row>
  )
}

export default projects