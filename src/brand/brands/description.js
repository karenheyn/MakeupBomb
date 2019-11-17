import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.display);
    if (this.props.display) {
      return <p>{this.props.data.description}</p>;
    } else {
      return null;
    }
  }
}

export default Description;
