import React from 'react'

// Style Sheets
import './Settings.css'

// Components
import NavBar from '../../Components/NavBar'
import ProfileContainer from '../../Components/Profile-Container'

export default function Settings(props){
    return (
        <div className="Settings">
            <ProfileContainer />
            
            <h2>Settings</h2>
            <div className="Settings_List">
                <div>
                    <section>
                        <p>Change Password</p>
                        {/* <input placeholder="old password" />
                        <input placeholder="new password" /> */}
                    </section>
                    <p>Change Email</p>
                    <p>Billings</p>
                    <p>Update Address</p>
                    <p>Delete Account</p>
                </div>
            </div>
        </div>
    )
}