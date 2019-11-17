import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

const baseurl = "http://localhost:4000/product/brand/";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display: false
    };
    this.toggleDescription = this.toggleDescription.bind(this);
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
  toggleDescription() {
    if (this.state.display === false) {
      this.setState({ display: true });
    } else {
      this.setState({ display: false });
    }
  }
  render() {
    let desc;
    this.state.data.filter(item => {
      if (this.state.display === true) {
        desc = <p>{item.description}</p>;
      }
      return desc;
    });
    console.log(this.props.match);
    console.log(this.state.data);
    return (
      <div>
        <h1>{this.props.match.params.name.replace("_", " ")}</h1>
        {this.state.data.map((item, i) => (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <img src={item.imageLink} alt='missing'></img>
            <h3>price: ${item.price}</h3>
            <a href={item.productLink}>Buy</a>
            <button onClick={this.toggleDescription} value={item.description}>
              description
            </button>
            <div>{desc}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Brands;
