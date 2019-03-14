import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'

import './App.css';
import AboutContainer from './components/home/AboutContainer';
import ProjectsContainer from './components/projects/ProjectsContainer'
import ResumeContainer from './components/resume/ResumeContainer'
import ContactContainer from './components/contact/ContactContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Software Developer" name="Edwin Agbenyega" />

          <Switch>
            <Route exact path="/" component={AboutContainer} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route exact path="/resume" component={ResumeContainer} />
            <Route exact path="/contact" component={ContactContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
