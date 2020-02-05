import React, {Component} from 'react';

// Stlye Sheets
import './Register.css'
import AuthApiService from '../../services/auth-api-service';

export default class Register extends Component{

    state = {
        error: false
    }

    signup = ev => {
        ev.preventDefault()

        const {full_name, email, user_name, password, retype_password} = ev.target;

        let newUser = {
            full_name: full_name.value,
            email: email.value,
            user_name: user_name.value,
            password: password.value,
        }

        console.log(newUser)

        if(password.value !== retype_password.value){
            return this.setState({
                error: true
            })
        }

        AuthApiService.postUser(newUser)
            .catch(error => this.setState({
                error: true
            }))

    }

    render(){
        return (
            <div className='Register'>
                <form onSubmit={this.signup}>
                    <h2>Sign Up</h2>
                    <input name="full_name" type="text" placeholder='Full Name' required></input>
                    <input name="email" type="text" placeholder="google@gmail.com" required></input>
                    <input type="text" name="user_name" placeholder="User Name" required></input>
                    <input name='password' type="password" placeholder="********"></input>
                    {this.state.error ? <p>Please type the same password</p> : null}
                    <input name='retype_password' type="password" placeholder="repeat password"></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}