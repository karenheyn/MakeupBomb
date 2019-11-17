import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
const url = "http://localhost:4000/product";

class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      productBrandArray: [],
      filteredBrandArray: []
    };
  }
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
  }
  render() {
    console.log(this.state.data);
    this.state.data.map(item => this.state.productBrandArray.push(item.brand));
    let filteredProductBrand = [...new Set(this.state.productBrandArray)];
    return (
      <div>
        {filteredProductBrand.map(item => (
          <h1 key={item}>
            <Link to={`/brand/${item}`}>{item}</Link>
          </h1>
        ))}
      </div>
    );
  }
}
export default Brand;
