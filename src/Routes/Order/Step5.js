import React, { Component } from 'react'

// Components
import FormProgress from '../../Components/FormProgress/FormProgress'

// Context
import UserContext from '../../Context/Context'
import history from '../../Context/history'


// Style Sheets
import './Step5.css'
import TokenService from '../../services/token-service'

export default class Step5 extends Component {

    static contextType = UserContext;

    state = {
        checked: null
    }

    componentWillMount(){

        if(TokenService.getStep5() !== null){
            this.setState({
                checked: TokenService.getStep5()
            })
        }
        
    }

    step5 = ev => {
        ev.preventDefault();
        TokenService.saveStep5(`${this.state.checked}`)
        this.setState({
            checker: null
        })
        this.context.nextStep();
        history.push('/order/6')
    }

    checker = value => {
        this.setState({
            checked: value
        })
    }





    render(){
        return (
            <div className="Step5">
                <FormProgress step={this.props.match.url}/>
                <form onSubmit={this.step5}>
                    <h2>Any last modifications?</h2>
                    <div>
                        <input name="modifications"
                        id="bounce"
                        type="radio"
                        required
                        onChange={() => this.checker('Tide')}
                        checked={this.state.checked === 'Tide' ? true : false}
                        ></input>
                        <label htmlFor="bounce" >Bounce</label>
                    </div>
                    <div>
                        <input name="modifications"
                        id="gain"
                        type="radio"
                        required
                        onChange={() => this.checker('Gain')}
                        checked={this.state.checked === 'Gain' ? true : false}
                        ></input>
                        <label htmlFor="gain" >Gain</label>
                    </div>
                    <div>
                        <input name="modifications"
                        id="snuggle"
                        type="radio"
                        required
                        onChange={() => this.checker('Snuggle')}
                        checked={this.state.checked === 'Snuggle' ? true : false}
                        ></input>
                        <label htmlFor="snuggle" >Snuggle <span>+ $1.00</span></label>
                    </div>
                    <div>
                        <input name="modifications"
                        id="none"
                        type="radio"
                        required
                        onChange={() => this.checker('None')}
                        checked={this.state.checked === 'None' ? true : false}
                        ></input>
                        <label htmlFor="none" >None</label>
                    </div>
                    <section>
                        <button onClick={() => history.push('/order/4')}>Back</button>
                        <button type="submit">Checkout</button>
                    </section>
                </form>
            </div>
        )
    }
}