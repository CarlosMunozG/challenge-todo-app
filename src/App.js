import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import ToDoCreate from './pages/ToDoCreate.js';
import ToDoUpdate from './pages/ToDoUpdate.js';
// import NotFound from './pages/NotFound.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Navbar />
            <Route path='/' exact component={Home}/>
            <Route path='/create-todo' exact component={ToDoCreate}/>
            <Route path='/update-todo/:id' exact component={ToDoUpdate}/>
            {/* <Route component={NotFound} /> */}
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
