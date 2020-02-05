import React, { Component } from 'react';
import './Contact.css';
import NavBar from '../../Components/NavBar';

class Contact extends Component {
    render () {
        return (
            <div className="Contact">

                <NavBar />

                <div className="Contact_header">
                    <h3>GOT A QUESTION?</h3>
                    <h1>Contact Sudz</h1>
                    <p>We are here to help and answer any questions you might have. We look forward to hearing from you!</p>
                </div>

                <div className='Contact_Section'>
                    <form>
                        <label>Name</label>
                        <input placeholder='Shaker Sudz'></input>
                        <label>Email</label>
                        <input placeholder='sudz123@gmail.com'></input>
                        <label>Message</label>
                        <textarea placeholder='We will get back you shortly :)'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <div>
                        <h2>How can we help?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor.</p>
                        <h3>Need help ordering?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque 
                            pulvinar pellentesque habitant.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;