import React from 'react';
import {Link} from 'react-router-dom'

export default function NavBar(){
    return (
        <div className="topnav">
            <Link to="/Login">Login</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Product">Products</Link>
            <Link id='Nav_Header' to="/"><header>SHACKER</header></Link>
        </div>
    )
}