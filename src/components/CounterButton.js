import React, { Component } from 'react';

class CounterButton extends Component {
    constructor(props){
        super(props);
        this.state ={
            count:0,
            color: ''
        }
        this.udateCount = this.udateCount.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextProps, nextState);
        // return true;
        if (this.state.count !== nextState.count){
            return true;
        }
        return false;
    }
    udateCount(){
        this.setState(state => {
            return {count: state.count +1}
        });
    }
    render() {
        console.log("CounterButton render")
        return (
            <div>
                 <button color={this.props.color} onClick={this.udateCount} >Click Me : {this.state.count}</button>
            </div>
        );
    }
}

export default CounterButton;