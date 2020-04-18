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
    const colors = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#383961",
      "rgb(255, 106, 95)",
      "#5C2751",
      "#6457A6",
      "#CF8BA3",
      "#FF87AB",
      "#60B2E5",
      "#72195A",
    ];
    const len = colors.length;
    const random = Math.floor(Math.random(colors) * len);

    return (
      <div className='links'>
        {filteredProductType.map((item) =>
          item !== "" ? (
            <Link to={`/product/${item}`} key={item}>
              <div
                className='product-type-div'
                style={{
                  background: colors[Math.floor(Math.random(colors) * len)],
                }}
              >
                <h1 className='item'>{item.replace("_", " ")}</h1>
              </div>
            </Link>
          ) : undefined
        )}
      </div>
    );
  }
}
export default Product;
