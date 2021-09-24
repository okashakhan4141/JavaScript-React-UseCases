import React, { Component } from "react";

export default class NameAge extends Component {
  constructor(props) {
    super(props);
    this.age = props.age;
    this.name = props.name;
    this.DisplayNameAge = this.DisplayNameAge.bind(this);
  }
  DisplayNameAge() {
    if (
      document.getElementById(this.props.name).innerText ===
      "Click here to display the age"
    ) {
      document.getElementById(this.props.name).innerText =
        "Age: " + this.props.age;
    } else {
      document.getElementById(this.props.name).innerText =
        "Click here to display the age";
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3 id={this.props.name} onClick={this.DisplayNameAge}>
          Click here to display the age
        </h3>
      </div>
    );
  }
}
