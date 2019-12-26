import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../../Components/NavBar';
import Person from '../../Components/Max';


// Style Sheets
import './Profile.css'

class Profile extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <div className='profile_container'>
                    <Person name={"Max"} age={19} height={70} color={"purple"} cat={"draco"}/>
                    <Person name={"EJ"} age={19} height={74} color={"black"} dog={"blue"}/>
                </div>
            </div>
        );
    }
}

export default Profile;