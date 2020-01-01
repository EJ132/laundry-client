import React, { Component } from 'react'

// Components
import NavBar from '../../Components/NavBar'
import ProfileContainer from '../../Components/Profile-Container'

// Style Sheets
import './Personal.css';

export default class Personal extends Component{
    render() {
            return (
            <div className='Personal'>
                <ProfileContainer />
                <h2>Personal Info</h2>
                <div className='Personal_Info'>

                    <section>
                        <p><span>Address: </span> 1234 google blv. Los Angeles, CA</p>
                        <button>edit</button>
                    </section>

                    <section>
                        <p><span>Payment Info: </span> **** **** **** 1234 MasterCard</p>
                        <button>edit</button>
                    </section>
        
                    <section>
                        <p><span>Cell Phone: </span> (123) 456-7890 </p>
                        <button>edit</button>
                    </section>
                    
                    <section>
                        <p><span>Email: </span>john123@gmail.com</p>
                        <button>edit</button>
                    </section>
                    
                </div>
            </div>
        )
    }
    
}