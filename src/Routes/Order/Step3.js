import React, { Component } from 'react'

// Components
import FormProgress from '../../Components/FormProgress/FormProgress'

// Context
import UserContext from '../../Context/Context'
import history from '../../Context/history'

// Style Sheets
import './Step3.css'
import TokenService from '../../services/token-service'

export default class Step3 extends Component {

    static contextType = UserContext;

    state = {
        checked: null
    }

    componentWillMount(){

        if(TokenService.getStep3() !== null){
            this.setState({
                checked: TokenService.getStep3()
            })
        }
        
    }

    step3 = ev => {
        ev.preventDefault()
        TokenService.saveStep3(`${this.state.checked}`)
        this.setState({
            checked: null
        })
        history.push('/order/4')
    }

    checker = value => {
        this.setState({
            checked: value
        })
    }

    render(){
        console.log(this.props)
        return (
            <div className="Step3">
                <FormProgress step={this.props.match.url}/>
                <form onSubmit={this.step3}>
                    <h2>Choose the drying temperature: </h2>
                    <div>
                        <input name="washtemp"
                        id="cool"
                        type="radio"
                        required
                        onChange={() => this.checker('Cool')}
                        checked={this.state.checked === 'Cool' ? true : false}
                        ></input>
                        <label htmlFor="cool" >Cool</label>
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
                    <input id="wash_special" placeholder="specific needs type here" type="text"/>
                    <div>
                        <button onClick={() => history.push('/order/2')}>Back</button>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        )
    }
}