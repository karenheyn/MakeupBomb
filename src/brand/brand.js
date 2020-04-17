import React, { Component } from "react";
import "../brand/brand.css";
import { Route, Link } from "react-router-dom";
const url = "https://makeupinfo.herokuapp.com/product";

class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      productBrandArray: [],
      filteredBrandArray: [],
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
    console.log(this.state.data);
    this.state.data.map((item) =>
      this.state.productBrandArray.push(item.brand)
    );
    let filteredProductBrand = [
      ...new Set(this.state.productBrandArray.sort()),
    ];
    console.log(filteredProductBrand);
    return (
      <div className='links'>
        {filteredProductBrand.map((item) =>
          item !== null && item !== "" ? (
            <Link to={`/brand/${item}`}>
              <div className='product-type-div' key={item}>
                <h3 className='item'>{item}</h3>
              </div>
            </Link>
          ) : (
            false
          )
        )}
      </div>
    );
  }
}
export default Brand;
