import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Services
import AuthApi from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import config from '../../config'

// Style Sheets
import './Login.css';

// Components
import NavBar from '../../Components/NavBar'

export default class Login extends Component {

    handleLogin = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
        AuthApi.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
        .then(res => {
            TokenService.saveUserName(user_name.value)
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            fetch(`${config.API_ENDPOINT}/profile/${TokenService.getUserName()}`, {
              headers: {'authorization': `bearer ${TokenService.getAuthToken()}`},})
                .then(res =>
                    (!res.ok)
                        ? res.json().then(e => Promise.reject(e))
                        : res.json()
                )
                .then(resJSON => {
                  TokenService.saveUserId(resJSON.id)})
            // history.push('/')
            console.log(res)
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
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