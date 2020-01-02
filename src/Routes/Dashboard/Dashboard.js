import React from 'react'

// Style Sheets
import './Dashboard.css'

// Assets
import money from '../../Assets/money.png';
import notepad from '../../Assets/notepad.png';

export default function Dashboard(props){

    return (
        <div className="Dashboard">
            <div className='Dashboard_Left'>
                <section className="Progress">
                    <h2>Points till Reward</h2>
                    <div className="Progress_bar">
                        <div>
                        </div>
                    </div>
                    <p>22 points till random prize!</p>
                </section>
                <section className="Most_Recent">
                    <h2>Most recent orders</h2>
                    <ul>
                        <li>
                            <h3>Date: January 1, 2020</h3>
                            <img alt='money' src={money}/>
                            <img id="notepad" alt='notepad' src={notepad}/>
                        </li>
                        <li>
                            <h3>Date: January 1, 2020</h3>
                            <img alt='money' src={money}/>
                            <img id="notepad" alt='notepad' src={notepad}/>
                        </li>
                        <li>
                            <h3>Date: January 1, 2020</h3>
                            <img alt='money' src={money}/>
                            <img id="notepad" alt='notepad' src={notepad}/>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="Dashboard_Right">
                <section>
                    <h2>{props.fullname}</h2>
                    <p>Member since: January 1, 2020</p>
                    <p>Loads Washed: 12</p>
                </section>
            </div>
        </div>
    )
}