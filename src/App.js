import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import './CSS/App.css';

import HomePage from "./Routes/HomePage"
import Product from './Routes/Product';
import Contact from './Routes/Contact';
import Login from './Routes/Login';
import Profile from './Routes/Profile';
import NotFound from './Routes/404';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/404" component={NotFound}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Product" component={Product}/>
        <Route exact path="/Profile" component={Profile}/>
        <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
