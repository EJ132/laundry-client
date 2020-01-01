import React, { Component } from 'react';

// Services
import AuthApi from '../services/auth-api-service'
import TokenService from '../services/token-service'

// History
import history from './history'

const UserContext = React.createContext({
    user: {},
    setUser: () => {}
})

export default UserContext;

export class UserProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            user: {}
        }

        this.state = state;
    }

    processLogin = (user_name, password) => {
        console.log(user_name)
        let credentials = {user_name, password};
        AuthApi.postLogin(credentials).then(resJSON => {
            TokenService.saveUserName(user_name);
            TokenService.saveAuthToken(resJSON.authToken);
            history.push('/profile/dashboard')
            console.log(resJSON);
            }
        )
    }

    render(){
        const value = {
            user: this.state.user,
            processLogin: this.processLogin
        }
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}