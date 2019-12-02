import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../CSS/App.css';
import logo from '../Assets/logo.svg';

class Product extends Component {

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

                </body>
                
                <button>Febreze</button>
                <button>Fold Clothes</button>
                <button>Pound Per Clothes</button>
            </html>
        );
    }
}

export default Product;