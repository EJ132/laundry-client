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
        allsteps: [],
        error: null
    }

    componentWillMount(){
        let allsteps = TokenService.getAllSteps();
        this.setState({
            allsteps: allsteps
        })
    }

    CompleteOrder = () => {

        let allsteps = TokenService.getAllSteps();
        console.log(allsteps);
        for(let i = 0; i < allsteps.length; i++){
            if(allsteps[i] === null){
                this.setState({
                    error: true
                })
            }
        }

        TokenService.clearAllSteps()
        history.push('/order/confimation');
    }

    AddressForm = () => {
        
    }

    render(){
        return (
            <div className="Checkout">
                <FormProgress step={this.props.match.url}/>
                <h1>Checkout</h1>
                <div id="Checkout_Box">
                    <div className="Checkout_Details">
                        <div>
                            <section>
                            <h2 id="Checkout_Details_Header">Details</h2>
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

                        <div>
                            <section id="Billing_Checkout">
                                <h2>Billing</h2>
                                <form>
                                    <label>Address</label>
                                    <input placeholder="123 st." required/>
                                    <label>City</label>
                                    <input placeholder="Los Angeles" required/>
                                    <label>State</label>
                                    <input placeholder="California" required/>
                                    <label>Zipcode</label>
                                    <input placeholder="123456" required/>
                                </form>
                            </section>
                        </div>

                    </div>


                    <div className="Checkout_Price">
                        <h2>Summary</h2>
                        <p>- Normal Load</p>
                        <p id="final_price">Total: <span>$13.00</span></p>
                    </div>

                    <div id="Checkout_Buttons">
                        {this.state.error ? <p id="Checkout_Error">Please complete all information</p> : null}
                        <button onClick={() => history.push('/order/5')}>Back</button>
                        <button type="submit" onClick={this.CompleteOrder}>Order</button>
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