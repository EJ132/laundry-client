import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.svg';
import '../CSS/App.css';
import '../CSS/Contact.css';

class Contact extends Component {
    render () {
        return (
            <html>
                <body className="App">
                <div className="topnav">
                <Link to="/Login">Login</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Product">Products</Link>
                <header>SHACKER</header>
                <Link to="/" id="special"><img src={logo} alt="logo"/></Link>
                </div>

                <div className="Contact">
                <h1 id="contact-label">Contact</h1>
                </div>
                </body>

            <footer className="BotFoot">
            &#169; 2019 EJ Gonzalez
            </footer>
            </html>
        );
    }
}

export default Contact;