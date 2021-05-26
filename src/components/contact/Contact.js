import React from "react";
import { Row, Col, Button, Form, Input, FormGroup } from "reactstrap";

import styles from "../../stylesheets/Contact.module.css";
import instagram from "../../assets/instagram.svg";
import behance from "../../assets/behance.svg";
import linkedin from "../../assets/linkedin.svg";

const contact = (props) => {
  return (
    <div className={styles.Contact}>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <p>For any job offers or questions, feel free to drop me a line!</p>
          <Form method="POST" action="https://formspree.io/eddy.devv@gmail.com">
            <FormGroup>
              <Input
                type="text"
                placeholder="Email Address?"
                name="contactEmailAddress"
                id="contactEmail"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                placeholder="Message?"
                name="contactText"
                id="contactText"
              />
            </FormGroup>
            <Button outline color="secondary">
              Deliver
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="p-5 justify-content-center">
        <Col>
          <a
            href="https://www.linkedin.com/in/eddybanks03/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-5"
          >
            <img src={linkedin} height="40vh" alt="LinkedIn link with logo" />
          </a>
          <a
            href="https://www.behance.net/eddybanks"
            target="_blank"
            rel="noopener noreferrer"
            className="m-5"
          >
            <img src={behance} height="40vh" alt="Behance link with logo" />
          </a>
          <a
            href="https://www.instagram.com/ed_mka/"
            target="_blank"
            rel="noopener noreferrer"
            className="m-5"
          >
            <img src={instagram} height="40vh" alt="Instagram link with logo" />
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Row>
    </div>
  );
};

export default contact;
