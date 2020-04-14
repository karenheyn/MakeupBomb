import React, { Component } from "react";
import axios from "../../node_modules/axios";
import Input from "./input";
import "./update.css";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      brand: "",
      name: "",
      price: "",
      imageLink: "",
      productLink: "",
      category: "",
      productType: "",
    };
    this.handleChange = this.handleChange.bind();
    this.onSubmit = this.onSubmit.bind();
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    axios
      .put(
        `https://makeupinfo.herokuapp.com/product${this.state._id}`,
        this.state
      )
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      _id,
      brand,
      name,
      price,
      imageLink,
      productLink,
      productCategory,
      productType,
    } = this.state;
    const info = [
      { name: "_id", placeholder: "product ID", value: _id },
      { name: "brand", placeholder: "brand", value: brand },
      { name: "name", placeholder: "product name", value: name },
      { name: "price", placeholder: "price", value: price },
      { name: "image-link", placeholder: "image link", value: imageLink },
      { name: "product-link", placeholder: "product link", value: productLink },
      {
        name: "product category",
        placeholder: "product category",
        value: productCategory,
      },
      { name: "product type", placeholder: "product type", value: productType },
    ];

    return (
      <div>
        <h2 className='links'>Search by ID and update</h2>
        <div className='form-container'>
          <Input props={info}></Input>
        </div>
      </div>
    );
  }
}
export default Update;
