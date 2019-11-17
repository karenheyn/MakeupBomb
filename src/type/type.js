import React, { Component } from "react";
import Product from "../product/product";
const baseurl = "http://localhost:4000/product/type/";

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      description: !this.state.data.description
    };
  }
  componentDidMount() {
    const type = this.props.match.params.name;
    const url = `${baseurl}${type}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
  }
  handleClick() {}
  render() {
    console.log(this.props.match);
    console.log(this.state.data);
    return (
      <div>
        <h1>{this.props.match.params.name.replace("_", " ")}</h1>
        {this.state.data.map(item => (
          <div key={item._id}>
            <h3>{item.brand}</h3>
            <img src={item.imageLink} alt='missing'></img>
            <h3>price: ${item.price}</h3>
            <button>description</button>
            <h5>{item.description}</h5>
          </div>
        ))}
      </div>
    );
  }
}

export default Type;
