import React from 'react';
import {Link} from 'react-router-dom'
import './Register.css'

export default class Register extends React.Component{
    render(){
        return (
            <div className='Register'>
                <h2>Login</h2>
                <input type="text" name="user_name" placeholder="John123" required></input>
                <input name='password' type="password" placeholder="********"></input>
                <button type='submit'>Sign In</button>
                <section className='login_bottom'>
                    <Link to='/forgot' id='forgot_password'>Forgot Password</Link>
                    <Link to='/new' id='create_account'>Create Account?</Link>
                </section>
            </div>
        )
    }
}