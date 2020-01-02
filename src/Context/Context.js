import React, { Component } from 'react';

// Services
import AuthApi from '../services/auth-api-service'
import TokenService from '../services/token-service'

// History
import history from './history'

const UserContext = React.createContext({
    user: {},
    processLogin: () => {},
    getUserInfo: () => {},
    setUser: () => {},
    nextStep: () => {},
})

export default UserContext;

export class UserProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            user: '',
            currentStep: 1,
        }

        this.state = state;
    }

    processLogin = async (user_name, password) => {

        let credentials = {user_name, password};
        await AuthApi.postLogin(credentials).then(resJSON => {
            TokenService.saveUserName(user_name);
            TokenService.saveAuthToken(resJSON.authToken);
            history.push('/profile/dashboard');

            }
        )

        await this.getUserInfo()
    }

    getUserInfo = async () => {
        let username = TokenService.getUserName();
        let data;
        await AuthApi.UserInfo(username).then(resJSON => {
            data = resJSON
        })
        return this.setUser(data)
    }

    setUser = user => {
        if(this.state.user === ''){
            this.setState({
                user: user
            })
        }
    }

    nextStep = () => {

        if(this.state.currentStep === 7){
            return
        }

        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    previousStep = () => {
        this.setState({
            currentStep: this.state.currentStep - 1
        })
    }

    render(){
        const value = {
            user: this.state.user,
            currentStep: this.state.currentStep,
            processLogin: this.processLogin,
            getUserInfo: this.getUserInfo,
            setUser: this.setUser,
            nextStep: this.nextStep,
            previousStep: this.previousStep,
        }
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}