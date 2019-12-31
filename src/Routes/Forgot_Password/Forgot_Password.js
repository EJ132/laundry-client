import React from 'react';

// Stlye Sheets
import './Forgot_Password.css'

export default class Forgot_Password extends React.Component{

    state = {
        sending: null
    }

    render(){
        return (
            <div className='Forgot_Page'>
                <form>
                    <div>
                        <h2>Forgot Password?</h2>
                        {this.state.sending ? '<p>Email was just sent... please wait 30 seconds</p>' : null}
                        <input placeholder='enter email'></input>
                        <button type='submit'>Send</button>
                    </div>
                    <div id='Forgot_Page_Right'>
                    </div>
                </form>
            </div>
        )
    }
}