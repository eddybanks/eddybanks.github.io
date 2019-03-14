import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './layout/Header'

import styles from '../stylesheets/App.module.css'
import AboutContainer from './home/AboutContainer'
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
          <Header title="Software Developer" name="Edwin Agbenyega" navList={this.state.navList} />
          <section className={styles.Section}>
            <Switch>
              {this.state.navList.map(route => (
                <Route exact path={route.path} component={route.component} key={route.id} />
              ))}
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
