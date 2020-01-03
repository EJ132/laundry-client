import React, { Component } from 'react'

// Components
import FormProgress from '../../Components/FormProgress/FormProgress'

// Context
import UserContext from '../../Context/Context'
import history from '../../Context/history'

// Style Sheet
import './Step2.css'
import TokenService from '../../services/token-service'

export default class Step2 extends Component {

    static contextType = UserContext;

    state = {
        checked: ''
    }

    componentWillMount(){

        if(TokenService.getStep2() !== null){
            this.setState({
                checked: TokenService.getStep2()
            })
        }
        
    }

    step2 = ev => {
        ev.preventDefault()
        TokenService.saveStep2(`${this.state.checked}`)
        this.context.nextStep()
        history.push('/order/3')
    }

    checker = value => {
        this.setState({
            checked: value
        })
    }

    render(){
        return (
            <div className="Step2">
                <FormProgress step={this.props.match.url}/>
                <form onSubmit={this.step2}>
                    <h2>Choose the washing temperature: </h2>
                    <div>
                        <input name="washtemp"
                        id="cold"
                        type="radio"
                        required
                        onChange={() => this.checker('Cold')}
                        checked={this.state.checked === 'Cold' ? true : false}
                        ></input>
                        <label htmlFor="cold" >Cold</label>
                    </div>
                    <div>
                        <input name="washtemp"
                        id="warm"
                        type="radio"
                        required
                        onChange={() => this.checker('Warm')}
                        checked={this.state.checked === 'Warm' ? true : false}
                        ></input>
                        <label htmlFor="warm" >Warm</label>
                    </div>
                    <div>
                        <input name="washtemp"
                        id="hot"
                        type="radio"
                        required
                        onChange={() => this.checker('Hot')}
                        checked={this.state.checked === 'Hot' ? true : false}
                        ></input>
                        <label htmlFor="hot" >Hot</label>
                    </div>
                    <input id="wash_special" placeholder="specific needs type here || or other instructions" type="text"/>
                    <div>
                        <button onClick={() => history.push('/order/1')}>Back</button>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        )
    }
}