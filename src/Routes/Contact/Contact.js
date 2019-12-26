import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Home/App.css';
import './Contact.css';
import NavBar from '../../Components/NavBar';

class Contact extends Component {
    render () {
        return (
            <div>

            <NavBar />

            <footer className="BotFoot">
            &#169; 2019 EJ Gonzalez
            </footer>
            </div>
        );
    }
}

export default Contact;