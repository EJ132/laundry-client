import React, { Component } from 'react'

// Components
import NavBar from '../../Components/NavBar'
import ProfileContainer from '../../Components/Profile-Container'

// Style Sheets
import './Personal.css';

// Context
import UserContext from '../../Context/Context'

export default class Personal extends Component{

    static contextType = UserContext;

    componentWillMount(){
        this.context.getUserInfo()
    }

    render() {
            return (
            <div className='Personal'>
                <ProfileContainer />
                <h2>Personal Info</h2>
                <div className='Personal_Info'>

                    <section>
                        <p><span>Address: </span>{this.context.user.address}</p>
                        <button>edit</button>
                    </section>

                    <section>
                        <p><span>Payment Info: </span>{this.context.user.payment_card}</p>
                        <button>edit</button>
                    </section>
        
                    <section>
                        <p><span>Cell Phone: </span>{this.context.user.cell}</p>
                        <button>edit</button>
                    </section>
                    
                    <section>
                        <p><span>Email: </span>{this.context.user.email}</p>
                        <button>edit</button>
                    </section>
                    
                </div>
            </div>
        )
    }
    
}