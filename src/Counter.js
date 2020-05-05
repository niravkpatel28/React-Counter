import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div>
        <p> {this.state.counter} </p>
        <button onClick={this.incrementCounter}> + </button>
        <span> {`     `} </span>
        <button onClick={this.decrementCounter}> - </button>
      </div>
    );
  }
}

export default Counter;
