import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.svg';

class Profile extends Component {
    render () {
        return (
            <div>
                <div className="App">
                <div className="topnav">
                <Link to="/Login">Login</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Product">Products</Link>
                <header>SHACKER</header>
                <Link to="/" id="special"><img src={logo} alt="logo"/></Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Profile;