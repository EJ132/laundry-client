import React, { Component } from 'react'

// Style Sheets
import './Confirmation.css'

export default class Confirmation extends Component {
    render(){
        return (
            <div className="Confirmation">
                <h1>Order Complete!</h1>
                <h2>Summary Details</h2>
                <p>Confirmation Number: #13VDN218167</p>
            </div>
        )
    }
}