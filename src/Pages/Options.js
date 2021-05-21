import React from 'react'
import Home from './Home'
import Images from '../api/Images'
import Select from '../api/Select'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
function Options() {
    return (
    <Router>
        <Switch>
          <Route path="/all">
            <Images />
          </Route>
          <Route path="/sel">
            <Select />
          </Route>
        </Switch>
        <div>
            <a style={{color:'white',margin:'2vw'}} href='/all'>All images</a>
            <a style={{color:'white',margin:'2vw'}} href='/sel'> Select by breed</a>
        </div>
    </Router>
    )
}

export default Options
