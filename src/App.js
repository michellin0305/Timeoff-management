import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import SignupPage from './Components/SignupPage/SignupPage';
import LoginPage from './Components/LoginPage/LoginPage'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </div>
      </Router>
    );
  }
}

export default App;
