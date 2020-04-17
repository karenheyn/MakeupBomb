import React, { Component } from "react";
import "./product.css";
import { Link } from "react-router-dom";
const url = "https://makeupinfo.herokuapp.com/product";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      productTypeArray: [],
      filteredProductTypeArray: [],
    };
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }
  render() {
    this.state.data.map((type) =>
      this.state.productTypeArray.push(type.productType)
    );
    let filteredProductType = [...new Set(this.state.productTypeArray)];
    console.log(filteredProductType);
    return (
      <div className='links'>
        {filteredProductType.map((item) =>
          item !== "" ? (
            <div className='product-type-div' key={item}>
              <h1>
                <Link to={`/product/${item}`} className='item'>
                  {item.replace("_", " ")}
                </Link>
              </h1>
            </div>
          ) : undefined
        )}
      </div>
    );
  }
}
export default Product;
