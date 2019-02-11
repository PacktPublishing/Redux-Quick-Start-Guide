import React, { Component } from "react";

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Enter Your Email</label>
        <input
          type="email"
          onChange={this.handleEmailChange}
          value={this.state.value}
          name="email"
        />
      </div>
    );
  }
}

export default EmailInput;
