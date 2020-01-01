import React, { Component } from 'react'

// Style Sheets
import './LearnMoreButton.css';
import './StartNowButton.css';
import './SecondPage.css';
import './ThirdPage.css';
import './FourthPage.css';

// Image Assets
import Order from '../../Assets/Order.svg';
import Wash from '../../Assets/Wash.svg';
import Deliver from '../../Assets/Deliver.svg';

// Token Service
import TokenService from '../../services/token-service'

// History
import history from '../../Context/history'

// Redirect
import {Redirect, Link} from 'react-router-dom'
import NavBar from '../../Components/NavBar';



class HomePage extends Component {
    

    startNow = () => {
        if(TokenService.getAuthToken()){
            this.props.history.push('/Product')
        } else {
            this.props.history.push('/Login')
        }
    }

    render () {

        function FourthPg() {
            window.scrollTo(0,1900);
        }

        return (
            <div>

            <NavBar />

            <div className="Main">
                <div className='Overlay_Homepage'>
                    <h1>Welcome to Shacker</h1>
                    <h2>The best laundry service at your door.</h2>
                    <button className="Start-Button" onClick={this.startNow}><span>Start Now</span></button>
                    <button className="Learn-Button" onClick={FourthPg}><span>Learn More</span></button>
                </div>
            </div>

            <div className="SecondPage">
                <header className="SecondPage-Title">About Us</header>
                <div>
                <p className="SecondPage-P1">Shacker is a laundry service company based in the Los Angeles area. Our task is to do all the heavy work
                    for you and make your life simpler. It's just as easy as ordering a pizza!</p>
                <img className="SecondPage-img" alt='los angeles city' src="https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2334&q=80"/>
                </div>
            </div>

            <div className="ThirdPage">
                <div>
                    <div className="Icon_Container">
                        <img className="Icons" alt='order icon' src={Order}/>
                        <img className="Icons" alt='wash icon' src={Wash}/>
                        <img className="Icons" alt='deliver icon' src={Deliver}/>
                    </div>
                    <div className="Icon_Names">
                        <ul>
                            <li>Order</li>
                            <li id='wash'>Wash</li>
                            <li>Deliver</li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="FourthPage">
                <header className="Fourth-Header">How It Works</header>
                <div>
                <img className="" alt='laundry mat' src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
                    <p>The process is very simple. All you have to do is order when you are ready and we will come pick up at your door.
                    Our delivery service comes ready with secure bags for your clothes to ensure that nothing gets lost in the process.
                    Once the clothes is picked up it will be weighed then taken back to a partnership laundry mat to get washed, dryed, and folded. </p>
                </div>
            </div>

            </div>
            
        );
    }
}

export default HomePage;