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
import Step1 from './Routes/Order/Step1';
import Step2 from './Routes/Order/Step2';
import Step3 from './Routes/Order/Step3';
import Step4 from './Routes/Order/Step4';
import Step5 from './Routes/Order/Step5';
import Step6 from './Routes/Order/Step6';
import Step7 from './Routes/Order/Step7';


// Private and Public Routes
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import PrivateOnlyRoute from './Utils/PrivateRoute'

// Context
import UserContext from './Context/Context'

// History
import history from './Context/history'
import TokenService from './services/token-service';



class App extends Component {

  static contextType = UserContext;

  componentWillUpdate(){
    if(TokenService.hasAuthToken()){
      this.context.getUserInfo()
    }
  }

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
        <PrivateOnlyRoute exact path='/order/1' component={Step1}/>
        <PrivateOnlyRoute exact path='/order/2' component={Step2}/>
        <PrivateOnlyRoute exact path='/order/3' component={Step3}/>
        <PrivateOnlyRoute exact path='/order/4' component={Step4}/>
        <PrivateOnlyRoute exact path='/order/5' component={Step5}/>
        <PrivateOnlyRoute exact path='/order/6' component={Step6}/>
        <PrivateOnlyRoute exact path='/order/7' component={Step7}/>
        <Redirect to="/404"/>
        </Switch>
        <footer className="BotFoot"> &#169; 2019 EJ Gonzalez</footer>
      </Router>
    );
  }
}

export default App;
