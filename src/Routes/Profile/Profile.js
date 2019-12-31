import React, { Component } from 'react';
import NavBar from '../../Components/NavBar';

// Assets
import DashboardIcon from '../../Assets/home.png'
import ProfileIcon from '../../Assets/profile.png'
import DebitCard from '../../Assets/debitcard.png'
import SettingsIcon from '../../Assets/settings.png'

// Components
import Dashboard from '../../Components/Dashboard/Dashboard';
import Personal from '../../Components/Personal/Personal';
import Transactions from '../../Components/Transactions/Transactions';
import Settings from '../../Components/Settings/Settings';


// Style Sheets
import './Profile.css'

class Profile extends Component {

    state = {
        currentPage: 'Dashboard'
    }

    changeCurrentPage = newPage => {

        this.setState({
            currentPage: newPage
        })

    }

    render () {
        return (
            <div className="Profile">
                <NavBar />
                <div className='profile_container'>
                    <img alt="dashboard" src={DashboardIcon} onClick={() => this.changeCurrentPage("Dashboard")}/>
                    <img alt="personal info" src={ProfileIcon} onClick={() => this.changeCurrentPage("Personal")}/>
                    <img alt="transactions" src={DebitCard} onClick={() => this.changeCurrentPage("Transactions")}/>
                    <img alt="settings" src={SettingsIcon} onClick={() => this.changeCurrentPage("Settings")}/>
                </div>

                <Dashboard />

            </div>
        );
    }
}

export default Profile;