import React from 'react';
import {Link} from 'react-router-dom'

// Token Service
import TokenService from '../services/token-service';

export default class NavBar extends React.Component {

    state = {
        loggedIn: false
    }

    componentWillMount(){
        if(TokenService.getAuthToken()){
            this.setState({
                loggedIn: true
            })
        }
    }

    logout = () => {
        TokenService.clearAuthToken();
        TokenService.clearUserName();
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div className="topnav">
                {TokenService.getAuthToken() ? <Link onClick={this.logout} to='/'>Log Out</Link> : <Link to="/Login">Login</Link>}
                {TokenService.getAuthToken() ? <Link to="/profile/dashboard">Profile</Link> : null}
                <Link to="/Contact">Contact</Link>
                <Link to="/Product">Products</Link>
                {TokenService.getAuthToken() ? <Link to='/order/1'>Order</Link> : null}
                <Link id='Nav_Header' to="/"><header>Sudz</header></Link>
            </div>
        )
    }
}