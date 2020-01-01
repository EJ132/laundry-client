import React from 'react'

// Components
import ProfileContainer from '../../Components/Profile-Container'
import NavBar from '../../Components/NavBar'

// Style Sheets
import './Transactions.css'

export default class Transactions extends React.Component {
    render() {
        return (
            <div className='Transactions'>
                <ProfileContainer />
                <h2>Transactions</h2>
                <div className='All_Transactions'>
                    <ul>
                        <li id='first_transaction'>
                            <h3>January 1, 2020</h3>
                            <p>$21.72</p>
                        </li>
                        <li>
                            <h3>January 1, 2020</h3>
                            <p>$21.72</p>
                        </li>
                        <li>
                            <h3>January 1, 2020</h3>
                            <p>$21.72</p>
                        </li>
                        <li>
                            <h3>January 1, 2020</h3>
                            <p>$21.72</p>
                        </li>
                        <li>
                            <h3>January 1, 2020</h3>
                            <p>$21.72</p>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
    
}