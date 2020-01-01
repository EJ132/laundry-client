import React, {Component} from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'; 
import './App.css';
import HomePage from "./Routes/Home/HomePage"
import Product from './Routes/Product/Product';
import Contact from './Routes/Contact/Contact';
import Login from './Routes/Login/Login';
import Profile from './Routes/Profile/Profile';
import Personal from './Routes/Personal/Personal';
import Transactions from './Routes/Transactions/Transactions';
import Settings from './Routes/Settings/Settings';
import Register from './Routes/Register/Register.js';
import Forgot_Password from './Routes/Forgot_Password/Forgot_Password';
import NotFound from './Routes/404';
import NavBar from './Components/NavBar'

// Private and Public Routes
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import PrivateOnlyRoute from './Utils/PrivateRoute'

// Context
import UserContext from './Context/Context'

// History
import history from './Context/history'


class App extends Component {

  static contextType = UserContext;

  render () {
    return (
      <Router  history={history}>
        <NavBar />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/404" component={NotFound}/>
        <Route exact path="/Contact" component={Contact}/>
        <PublicOnlyRoute exact path="/login" component={Login}/>
        <Route exact path='/new' component={Register}/>
        <Route exact path='/forgot' component={Forgot_Password}/>
        <Route exact path="/Product" component={Product}/>
        <PrivateOnlyRoute exact path="/profile/dashboard" component={Profile}/>
        <PrivateOnlyRoute exact path="/profile/personal" component={Personal}/>
        <PrivateOnlyRoute exact path="/profile/billing" component={Transactions}/>
        <PrivateOnlyRoute exact path="/profile/settings" component={Settings}/>
        <Redirect to="/404"/>
        </Switch>
        <footer className="BotFoot"> &#169; 2019 EJ Gonzalez</footer>
      </Router>
    );
  }
}

export default App;
