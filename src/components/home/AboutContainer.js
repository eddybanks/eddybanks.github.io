import React, { Component } from "react";
import About from "./About";

class AboutContainer extends Component {
  state = {
    title: "About Me",
    content: [
      "I'm Edwin Agbenyega",
      "I've been working as a data analyst for the past four and a half years and have a great passion for software development and data science.",
      "I enjoy every step of the full stack development process and I am currently looking to find a job that would help me grow my career as a developer.",
      "While I may be very new to the industry, I enjoy being challenged so drop me a line if you have a job for me.",
      "P.S. Hobbies include: Coding, Games (P.C & Switch mostly), Learning languages, Tennis, Drawing, Anime, Piano",
    ],
  };

  render() {
    return <About title={this.state.title} content={this.state.content} />;
  }
}

export default AboutContainer;
