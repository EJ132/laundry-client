import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import './Routes/Home/App.css';

import HomePage from "./Routes/Home/HomePage"
import Product from './Routes/Product/Product';
import Contact from './Routes/Contact/Contact';
import Login from './Routes/Login/Login';
import Profile from './Routes/Profile/Profile';
import Register from './Routes/Register/Register.js';
import Forgot_Password from './Routes/Forgot_Password/Forgot_Password';
import NotFound from './Routes/404';
import NavBar from './Components/NavBar'

// Private and Public Routes
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import PrivateOnlyRoute from './Utils/PrivateRoute'

class App extends Component {
  render () {
    return (
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/404" component={NotFound}/>
        <Route exact path="/Contact" component={Contact}/>
        <PublicOnlyRoute exact path="/Login" component={Login}/>
        <Route exact path='/new' component={Register}/>
        <Route exact path='/forgot' component={Forgot_Password}/>
        <Route exact path="/Product" component={Product}/>
        <PrivateOnlyRoute exact path="/Profile" component={Profile}/>
        <Redirect to="/404"/>
        </Switch>
        <footer className="BotFoot"> &#169; 2019 EJ Gonzalez</footer>
      </Router>
    );
  }
}

export default App;
