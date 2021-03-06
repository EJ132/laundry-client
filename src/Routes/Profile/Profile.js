import React, { Component } from 'react';

// Components
import Dashboard from '../Dashboard/Dashboard';
import ProfileContainer from '../../Components/Profile-Container'
import NavBar from '../../Components/NavBar'


// Style Sheets
import './Profile.css'


// Service
import TokenService from '../../services/token-service'


// Context
import UserContext from '../../Context/Context'

class Profile extends Component {

    static contextType = UserContext;

    changeCurrentPage = newPage => {
        this.setState({
            currentPage: newPage
        })
    }

    componentWillMount(){
        this.context.getUserInfo()
    }

    render () {
        console.log(this.context.user)
        return (
            <div className="Profile">
                <NavBar />
                <ProfileContainer />

                <Dashboard fullname={this.context.user.full_name}/>

            </div>
        );
    }
}

export default Profile;