import React, { Component } from 'react'

// Components
import FormProgress from '../../Components/FormProgress/FormProgress'

// Context
import UserContext from '../../Context/Context'
import history from '../../Context/history'

// Style Sheet
import './Step6.css'
import TokenService from '../../services/token-service'

export default class Step6 extends Component {

    static contextType = UserContext;

    state = {
        allsteps: []
    }

    componentWillMount(){
        let allsteps = TokenService.getAllSteps();
        this.setState({
            allsteps: allsteps
        })
    }

    render(){
        return (
            <div className="Checkout">
                <FormProgress step={this.props.match.url}/>
                <h1>Checkout</h1>
                <div id="Checkout_Box">
                    <div className="Checkout_Details">

                        <section>
                            Details
                        <h2>Load</h2>
                            <p>+ {this.state.allsteps[0]}</p>
                        </section>
                        <section>
                            <h2>Wash</h2>
                            <p>+ {this.state.allsteps[1]}</p>
                        </section>
                        <section>
                            <h2>Dry</h2>
                            <p>+ {this.state.allsteps[2]}</p>
                        </section>
                        <section>
                            <h2>Soap</h2>
                            <p>+ {this.state.allsteps[3]}</p>
                        </section>
                        <section>
                            <h2>Modifications</h2>
                            <p>+ {this.state.allsteps[4]}</p>
                        </section>

                    </div>


                    <div className="Checkout_Price">
                        <h2>Price</h2>
                    </div>  


                </div>
            </div>
        )
    }
}

// <div>
//     <h2>Billing</h2>
//     <label>First name</label>
//     <input placeholder="John"/>
//     <label>Last name</label>
//     <input placeholder="Doe"/>
//     <label>Debit Card</label>
//     <input placeholder="1234 1234 1234 1234"/>
//     <label>CSC</label>
//     <input placeholder="911"/>
// </div>