import React, { Component } from 'react'

// Components
import FormProgress from '../../Components/FormProgress/FormProgress'

// Context
import UserContext from '../../Context/Context'
import history from '../../Context/history'

// Style Sheet
import './Step4.css'
import TokenService from '../../services/token-service'


export default class Step4 extends Component {

    static contextType = UserContext;

    state = {
        checked: null
    }

    componentWillMount(){

        if(TokenService.getStep4() !== null){
            this.setState({
                checked: TokenService.getStep4()
            })
        }
        
    }

    step4 = ev => {
        ev.preventDefault()
        TokenService.saveStep4(`${this.state.checked}`)
        this.setState({
            checked: null
        })
        this.context.nextStep()
        history.push('/order/5')
    }

    checker = value => {
        this.setState({
            checked: value
        })
    }

    render(){
        return (
            <div className="Step4">
                <FormProgress step={this.props.match.url}/>
                <form onSubmit={this.step4}>
                    <h2>Choose the your brand of soap: </h2>
                    <div>
                        <input name="soap"
                        id="low"
                        type="radio"
                        required
                        onChange={() => this.checker('Tide')}
                        checked={this.state.checked === 'Tide' ? true : false}
                        ></input>
                        <label htmlFor="low" >Tide Pod</label>
                    </div>
                    <div>
                        <input name="soap"
                        id="medium"
                        type="radio"
                        required
                        onChange={() => this.checker('Arm')}
                        checked={this.state.checked === 'Arm' ? true : false}
                        ></input>
                        <label htmlFor="medium" >Arm & Hammer</label>
                    </div>
                    <div>
                        <input name="soap"
                        id="high"
                        type="radio"
                        required
                        onChange={() => this.checker('TideDowney')}
                        checked={this.state.checked === 'TideDowney' ? true : false}
                        ></input>
                        <label htmlFor="high" >Tide w/ Downey <span>+ $1.00</span></label>
                    </div>
                    <input id="dry_special" placeholder="specific needs type here" type="text"/>
                    <section>
                        <button onClick={() => history.push('/order/3')}>Back</button>
                        <button type="submit">Next</button>
                    </section>
                </form>
            </div>
        )
    }
}