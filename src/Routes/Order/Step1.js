import React, { Component } from 'react'

// Style Sheet
import './Step1.css'

// Components
import FormProgress from '../../Components/FormProgress/FormProgress'

// Context 
import UserContext from '../../Context/Context'
import history from '../../Context/history'
import TokenService from '../../services/token-service'

export default class Order extends Component {

    static contextType = UserContext;

    state = {
        checked: null,
        step: 1
    }

    componentWillMount(){

        if(TokenService.getStep1() !== null){
            this.setState({
                checked: TokenService.getStep1()
            })
        }
        
    }

    checker = value => {
        this.setState({
            checked: value
        })
    }

    stepOne = ev => {
        ev.preventDefault()
        console.log(this.state.checked)
        TokenService.saveStep1(`${this.state.checked}`)
        this.setState({
            checked: null
        })
        this.nextStep()
        history.push('/order/2')
    }

    nextStep = () => {
        if(this.state.step <= 7){
            this.context.nextStep()
            this.setState({
                step: this.state.step + 1
            })
        }
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1
        })
        this.context.previousStep()
    }

    render(){
        return (
            <div className="Order">
                <FormProgress step={this.props.match.url}/>
                <form onSubmit={this.stepOne}>
                    <h3>Kind of load?</h3>
                    <div>
                        <input name="loadtype" id="white" type="radio"
                         required 
                         onChange={() => this.checker('White')}
                         checked={this.state.checked === 'White' ? true : false}
                         ></input>
                        <label htmlFor="white" >White</label>
                    </div>
                    <div>
                        <input name="loadtype"
                        id="color"
                        type="radio"
                        required
                        onChange={() => this.checker('Color')}
                        checked={this.state.checked === 'Color' ? true : false}
                        ></input>
                        <label htmlFor="color" >Color</label>
                    </div>
                    <div>
                        <input name="loadtype"
                        id="both"
                        type="radio"
                        required 
                        onChange={() => this.checker('Both')}
                        checked={this.state.checked === 'Both' ? true : false}
                        ></input>
                        <label htmlFor="both" >Both</label>
                    </div>
                    <section>
                        {this.state.step === 1 ? null : <button onClick={this.previousStep}>Back</button>}
                        {this.state.step === 7 ? <button type="submit">Submit</button> : <button type="submit">Next</button>}
                    </section>
                </form>
            </div>
        )
    }
}