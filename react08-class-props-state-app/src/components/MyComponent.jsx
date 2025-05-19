import React, { Component } from "react";

class MyComponent extends Component {
    render() {
      
        let age = 25;

    return (
      <div>
            <h1>Class Components</h1>
            <h2>I'm {this.props.name}</h2>
            <p>My age is {age}</p>
      </div>
    );
  }
}

export default MyComponent;
