import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

    };
    this.udateCount = this.udateCount.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    // return true;
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  udateCount() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }
  render() {
    console.log("CounterButton render");
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
