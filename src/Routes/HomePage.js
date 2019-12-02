import React, { Component } from 'react'
import '../CSS/App.css';
import '../CSS/LearnMoreButton.css';
import '../CSS/StartNowButton.css';
import '../CSS/SecondPage.css';
import '../CSS/ThirdPage.css';
import '../CSS/FourthPage.css';
import logo from '../Assets/logo.svg';
import Order from '../Assets/Order.svg';
import Wash from '../Assets/Wash.svg';
import Deliver from '../Assets/Deliver.svg';
import logoCenter from '../Assets/logoCenter.svg';
import { Link } from "react-router-dom";

class HomePage extends Component {

    render () {

        function FourthPg() {
            window.scrollTo(0,1900);
        }

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

            <div className="Main">
                <img className="CenterLogo" src={logoCenter} alt="Logo in Center of Screen"/>
                <h1>Welcome to Shacker</h1>
                <h2>The best laundry service at your door.</h2>
                <button className="Start-Button"><span>Start Now</span></button>
                <button className="Learn-Button" onClick={FourthPg}><span>Learn More</span></button>
            </div>

            </body>

            <body className="SecondPage">
                <div>
                    <header className="SecondPage-Title">About Us</header>
                        <p className="SecondPage-P1">Shacker is a laundry service company based in the Los Angeles area. Our task is to do all the heavy work
                        for you and make your life simple.</p>
                        <img className="SecondPage-img" src="https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2334&q=80"/>
                </div>
            </body>

            <body className="ThirdPage">
                <div>
                    <img className="Icons" src={Order}/>
                    <img className="IconsShirt" src={Wash}/>
                    <img className="Icons" src={Deliver}/>
                    <p className="Icon-Name">Order</p>
                    <p className="Icon-Name">Wash</p>
                    <p className="Icon-Name">Deliver</p>
                </div>
            </body>

            <body className="FourthPage">
                <div  id='FourthPg'>
                    <header className="Fourth-Header">How It Works</header>
                    <img className="" src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
                    <div className="Fourth-Text">
                    <p>The process is very simple. All you have to do is order when you are ready and we will come pick up at your door. </p>
                    <p>Our delivery service comes ready with secure bags for your clothes to ensure that nothing gets lost in the process.</p>
                    <p>Once the clothes is picked up it will be weighed then taken back to a partnership laundry mat to get washed, dryed, and folded.</p>
                    </div>
                </div>
            </body>

            <footer className="BotFoot">
            &#169; 2019 EJ Gonzalez
            </footer>

            </html>
            
        );
    }
}

export default HomePage;