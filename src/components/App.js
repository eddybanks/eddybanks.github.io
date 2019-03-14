import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './layout/Header'

import styles from '../stylesheets/App.module.css';
import AboutContainer from './home/AboutContainer';
import ProjectsContainer from './projects/ProjectsContainer'
import ResumeContainer from './resume/ResumeContainer'
import ContactContainer from './contact/ContactContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
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
