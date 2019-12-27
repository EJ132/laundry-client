import React from 'react';
import {Link} from 'react-router-dom'

export default function Forgot_Password(){
    return (
        <form>
            <h2>Forgot</h2>
            <input type="text" name="user_name" placeholder="John123" required></input>
            <input name='password' type="password" placeholder="********"></input>
            <button type='submit'>Sign In</button>
            <section className='login_bottom'>
            <Link to='/forgot' id='forgot_password'>Forgot Password</Link>
            <Link to='/new' id='create_account'>Create Account?</Link>
            </section>
        </form>
    )
}