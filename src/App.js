import './App.css';
import React from 'react'
import Home from './Pages/Home'
import Images from './api/Images'


import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Dropdown from './Pages/Dropdown';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
      <Switch>
        <Route path="/all">
          <Images />
        </Route>
        <Route path="/sel">
          <Dropdown />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>
          <a style={{color:'white',margin:'2vw'}} href='/all'>All images</a>
          <a style={{color:'white',margin:'2vw'}} href='/sel'> Select by breed</a>
      </div>
      </header>
      </div>
    </Router>
  );
}

export default App;