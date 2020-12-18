import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import login from './Components/login'
import signup from './Components/signup'
import dashboard from './Components/tracker'
import Error404 from './Components/Error404';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <div className = "App">
      <header className = "App-header">
      <Router>
        <Switch>
          <Route exact path = '/' component={dashboard}/>
          <Route path = '/dashboard' component={dashboard}/>
          <Route path = '/login' component = {login}/>
          <Route path = '/signup' component = {signup}/>
          <Route component = {Error404}/>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
