import React from 'react';
import { Link } from 'react-router-dom';

// Image Assets
import DashboardIcon from '../Assets/home.png'
import ProfileIcon from '../Assets/profile.png'
import DebitCard from '../Assets/debitcard.png'
import SettingsIcon from '../Assets/settings.png'


export default class ProfileContainer extends React.Component{
    render() {
        return (
            <div className='profile_container'>
                <Link to='/profile/dashboard'><img alt="dashboard" src={DashboardIcon} /></Link>
                <Link to='/profile/personal'><img alt="personal info" src={ProfileIcon} /></Link>
                <Link to='/profile/billing'><img alt="transactions" src={DebitCard} /></Link>
                <Link to='/profile/settings'><img alt="settings" src={SettingsIcon} /></Link>
            </div>
        )
    }
    
}