import React, { Component } from "react";
import "./product.css";
import { Route, Link } from "react-router-dom";
const url = "https://makeupinfo.herokuapp.com/product";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      productTypeArray: [],
      filteredProductTypeArray: []
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
    this.state.data.map(type =>
      this.state.productTypeArray.push(type.productType)
    );
    let filteredProductType = [...new Set(this.state.productTypeArray)];
    return (
      <div className='links'>
        {filteredProductType.map(item => (
          <h1 key={item}>
            <Link to={`/product/${item}`} className='item'>
              {item.replace("_", " ")}
            </Link>
          </h1>
        ))}
      </div>
    );
  }
}
export default Product;
