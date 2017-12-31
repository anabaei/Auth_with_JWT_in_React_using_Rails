import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Signin from './components/Signin'
import Welcome from './components/Welcome'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <Router>
          <div className="App">
            <Route  exact path='/' component={Signin} />
            <Route  exact path='/welcome' component={Welcome} />
          </div>
        </Router>




      </div>
    );
  }
}

export default App;
