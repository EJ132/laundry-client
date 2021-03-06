import React, { Component } from 'react'

// Style Sheet
import './FormProgress.css'


// Context
import UserContext from '../../Context/Context'
import history from '../../Context/history'

export default class FormProgress extends Component {

    static contextType = UserContext;

    state = {
        progressStep: this.props.step
    }

    componentDidMount(){
       if(document.getElementById(`${this.props.step}`)){
        document.getElementById(`${this.props.step}`).style.backgroundColor = 'gold';
       }
    }

    componentWillReceiveProps(){
        if(document.getElementById(`${this.props.step}`)){
            document.getElementById(`${this.props.step}`).style.backgroundColor = 'gold';
        }
    }


    render(){
        return (
            <div className="FormProgress_Bar">
                <div id="/order/1" onClick={() => history.push('/order/1')}></div>
                <div id="/order/2" onClick={() => history.push('/order/2')}></div>
                <div id="/order/3" onClick={() => history.push('/order/3')}></div>
                <div id="/order/4" onClick={() => history.push('/order/4')}></div>
                <div id="/order/5" onClick={() => history.push('/order/5')}></div>
                <div id="/order/6" onClick={() => history.push('/order/6')}></div>
                <div id="/order/7"></div>
            </div>
        )
    }
}