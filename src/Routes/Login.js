import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.svg';
import AuthApi from '../services/auth-api-service'
import TokenService from '../services/token-service'
import config from '../config'
import '../CSS/Login.css';

class Login extends Component {

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
            <div>
                <div className="App-Login">
                <div className="topnav">
                <Link to="/Login">Login</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Product">Products</Link>
                <header>SHACKER</header>
                <Link to="/" id="special"><img src={logo} alt="logo"/></Link>
                </div>

                <form className="Login" onSubmit={this.handleLogin}>
                <h1>Existing User</h1>
                <p htmlFor='user_name' id="Login-Placeholder1">Username</p>
                <input type="text" name="user_name" placeholder="John123" id="input-boxes1" required></input>
                <p htmlFor='password' id="Login-Placeholder1">Password</p>
                <input name='password' type="password" placeholder="********" id="input-boxes1" ></input>
                <p id="Forgot-Pass"><button id="Forgot-Btn">Forgot Password</button></p>
                <button type='submit' id="Sign-In">Sign In</button>
                </form>

                <form className="Sign-Up">
                <h1>Sign Up</h1>
                <p id="Login-Placeholder2">Username</p>
                <input type="text" placeholder="John123" id="input-boxes2"></input>
                <p id="Login-Placeholder2">Password</p>
                <input type="text" placeholder="CookieMonster_123" id="input-boxes2"></input>
                <p id="Login-Placeholder2">Email</p>
                <input type="text" placeholder="John_Cook123@yahoo.com" id="input-boxes2"></input>
                <button id="Sign-UpBtn">Sign Up</button>
                </form>

                </div>

            <footer className="BotFoot">
            &#169; 2019 EJ Gonzalez
            </footer>

            </div>
        );
    }
}

export default Login;