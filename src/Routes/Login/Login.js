import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Services
import AuthApi from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import config from '../../config'

// Style Sheets
import './Login.css';

// Context
import history from '../../Context/history';
import UserContext from '../../Context/Context'


export default class Login extends Component {

    static contextType = UserContext;

    handleLogin = ev => {
      ev.preventDefault()
      const { user_name, password } = ev.target;

      this.context.processLogin(user_name.value, password.value);

    }

    render () {
        return (
            <div className='Login'>
                <form onSubmit={this.handleLogin}>
                  <h2>Login</h2>
                  <input type="text" name="user_name" placeholder="John123" required></input>
                  <input name='password' type="password" placeholder="********"></input>
                  <button type='submit'>Sign In</button>
                  <section className='login_bottom'>
                    <Link to='/forgot' id='forgot_password'>Forgot Password</Link>
                    <Link to='/new' id='create_account'>Create Account?</Link>
                  </section>
                </form>
          </div>
        );
    }
}