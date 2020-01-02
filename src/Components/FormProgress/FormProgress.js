import React, { Component } from 'react'

// Style Sheet
import './FormProgress.css'


// Context
import UserContext from '../../Context/Context'

export default class FormProgress extends Component {

    static contextType = UserContext;

    state = {
        progressStep: this.props.step
    }

    componentDidMount(){
       if(document.getElementById(`step${this.props.step}`)){
        document.getElementById(`step${this.props.step}`).style.backgroundColor = 'blue';
       }
    }

    componentWillReceiveProps(){
        if(document.getElementById(`step${this.props.step}`)){
            document.getElementById(`step${this.props.step}`).style.backgroundColor = 'blue';
        }
    }


    render(){
        return (
            <div className="FormProgress_Bar">
                <div id="step1"></div>
                <div id="step2"></div>
                <div id="step3"></div>
                <div id="step4"></div>
                <div id="step5"></div>
                <div id="step6"></div>
                <div id="step7"></div>
            </div>
        )
    }
}