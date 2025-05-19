import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
    render() {

        const { name, age } = this.props;
      
    return (
        <div>
            {/* <h1>Hey, I'm {this.props.name}</h1> */}
        <h1>Counter : {this.state.count}</h1>
            <button onClick={this.increment}>Click</button>
            
            <p>Name : {name}</p>
            <p>Age : {age}</p>
      </div>
    );
  }
}

export default Counter;
