import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './layout/Header'
import Navigation from './layout/Navigation'

import styles from '../stylesheets/App.module.css';
import AboutContainer from './home/AboutContainer';
import ProjectsContainer from './projects/ProjectsContainer'
import ResumeContainer from './resume/ResumeContainer'
import ContactContainer from './contact/ContactContainer'

class App extends Component {
  state = {
    navList: [
      {id: 0, path: "/", title: 'About', component: AboutContainer},
      {id: 1, path: "/projects", title: 'Projects', component: ProjectsContainer},
      {id: 2, path: "/resume", title: 'Resume', component: ResumeContainer},
      {id: 3, path: "/contact", title: 'Contact', component: ContactContainer}
    ]
  }
  
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header title="Software Developer" name="Edwin Agbenyega" />
          <Navigation navList={this.state.navList} />
          <Switch>
            {this.state.navList.map(route => (
              <Route exact path={route.path} component={route.component} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
