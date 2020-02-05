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

    CompleteOrder = ev => {

        ev.preventDefault();

        const { street, city, state, zipcode,card_name, card_number, card_date, card_code } = ev.target;
        console.log(street.value)
        console.log(city.value)
        console.log(state.value)
        console.log(zipcode.value)
        console.log(card_name.value)
        console.log(card_number.value)
        console.log(card_date.value)
        console.log(card_code.value)

        let allsteps = TokenService.getAllSteps();
        console.log(allsteps);
        for(let i = 0; i < allsteps.length; i++){
            if(allsteps[i] === null){
                this.setState({
                    error: true
                })
            }
        }

        setTimeout()

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
                <form id="Checkout_Box" onSubmit={this.CompleteOrder}>
                    <div className="Checkout_Details">

                        <div>
                            <section id="Billing_Checkout">
                                <h2>Billing</h2>
                                <section>
                                    <label htmlFor="street">Address</label>
                                    <input name="street" id="street" placeholder="123 st." required/>
                                    <label htmlFor="city">City</label>
                                    <input name="city" id="city" placeholder="Los Angeles" required/>
                                    <label htmlFor="state">State</label>
                                    <input name="state" id="state" placeholder="California" required/>
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input name="zipcode" id="zipcode" placeholder="123456" required/>
                                </section>
                            </section>
                        </div>

                        <div>
                            <section id="Billing_Checkout">
                            <h2 id="payment_details">Payment Details</h2>
                                <label htmlFor="card_name">Name On Card</label>
                                <input name="card_name" id="card_name" placeholder="John Doe" required/>
                                <label htmlFor="card_number">Card Number</label>
                                <input name="card_number" id="card_number" placeholder="1234 1234 1234 1234" required/>
                                <label htmlFor="card_date">Expiry Date</label>
                                <input name="card_date" id="card_date" placeholder="12/2023" required/>
                                <label htmlFor="card_code">Secure Code</label>
                                <input name="card_code" id="card_code" placeholder="123" required/>
                            </section>
                        </div>

                    </div>


                    <div className="Checkout_Price">
                        <h2>Summary</h2>
                        <section>
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
                        <p>- Normal Load</p>
                        <p id="final_price">Total: <span>$13.00</span></p>
                    </div>

                    <div id="Checkout_Buttons">
                        {this.state.error ? <p id="Checkout_Error">Please complete all information</p> : null}
                        <button onClick={() => history.push('/order/5')}>Back</button>
                        <button type="submit">Order</button>
                    </div>

                </form>

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