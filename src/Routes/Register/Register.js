import React, {Component} from 'react';

// Stlye Sheets
import './Register.css'

export default class Register extends Component{
    render(){
        return (
            <div className='Register'>
                <form>
                    <h2>Sign Up</h2>
                    <input name="Full_Name" type="text" placeholder='Full Name' required></input>
                    <input name="email" type="text" placeholder="google@gmail.com" required></input>
                    <input type="text" name="user_name" placeholder="User Name" required></input>
                    <input name='password' type="password" placeholder="********"></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}