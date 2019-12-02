import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.svg';
import '../CSS/Login.css';

class Login extends Component {
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

                <div className="Login">
                <h1>Existing User</h1>
                <p id="Login-Placeholder1">Username</p>
                <input type="text" placeholder="John123" id="input-boxes1"></input>
                <p id="Login-Placeholder1">Password</p>
                <input type="text" placeholder="CookieMonster_123" id="input-boxes1"></input>
                <p id="Forgot-Pass"><button id="Forgot-Btn">Forgot Password</button></p>
                <button id="Sign-In">Sign In</button>
                </div>

                <div className="Sign-Up">
                <h1>Sign Up</h1>
                <p id="Login-Placeholder2">Username</p>
                <input type="text" placeholder="John123" id="input-boxes2"></input>
                <p id="Login-Placeholder2">Password</p>
                <input type="text" placeholder="CookieMonster_123" id="input-boxes2"></input>
                <p id="Login-Placeholder2">Email</p>
                <input type="text" placeholder="John_Cook123@yahoo.com" id="input-boxes2"></input>
                <button id="Sign-UpBtn">Sign Up</button>
                </div>

                </div>

            <footer className="BotFoot">
            &#169; 2019 EJ Gonzalez
            </footer>

            </div>
        );
    }
}

export default Login;