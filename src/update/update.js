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
  handleChange = (e) => {
    e.preventDefault();
    console.log("poop");
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
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
    const info = [
      { name: "_id", placeholder: "product ID" },
      { name: "brand", placeholder: "brand" },
      { name: "name", placeholder: "product name" },
      { name: "price", placeholder: "price" },
      { name: "image-link", placeholder: "image link" },
      { name: "product-link", placeholder: "product link" },
      {
        name: "product category",
        placeholder: "product category",
      },
      { name: "product type", placeholder: "product type" },
    ];

    const dataArray = info.map((item) => (
      <Input
        name={item.name}
        placeholder={item.placeholder}
        key={item.name}
        onChange={this.handleChange}
        value={this.state[item.name]}
      ></Input>
    ));
    return (
      <div>
        <h2 className='links'>Search by ID and update</h2>
        <div className='form-container'>{dataArray}</div>
      </div>
    );
  }
}
export default Update;
