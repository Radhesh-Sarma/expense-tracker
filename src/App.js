import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Login from './Components/login'
import Signup from './Components/signup'
import dashboard from './Components/tracker'
import Error404 from './Components/Error404';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <div className = "d-flex">


      <Router>
      <AuthProvider>
        <Switch>
          <Route exact path = '/' component={dashboard}/>
          <Route path = '/dashboard' component={dashboard}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/signup' component = {Signup}/>
          <Route component = {Error404}/>
        </Switch>
        </AuthProvider>
      </Router>
      </div>
      </header>
    </div>
  );
}

export default App;
