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
      productCategory: "",
      productType: "",
    };
    this.handleChange = this.handleChange.bind();
    this.handleUpdate = this.handleUpdate.bind();
    this.handleAdd = this.handleAdd.bind();
    this.handleDelete = this.handleDelete.bind();
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log("poop");
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleDelete = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    axios
      .delete(
        `https://makeupinfo.herokuapp.com/product/${this.state._id}`,
        this.state
      )
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };
  handleAdd = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    axios
      .post("https://makeupinfo.herokuapp.com/product", this.state)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  handleUpdate = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    axios
      .put(
        `https://makeupinfo.herokuapp.com/product/${this.state._id}`,
        this.state
      )
      .then((res) => {
        console.log(res, "success");
      })
      .then((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    const info = [
      { name: "_id", placeholder: "product ID" },
      { name: "brand", placeholder: "brand" },
      { name: "name", placeholder: "product name" },
      { name: "price", placeholder: "price" },
      { name: "imageLink", placeholder: "image link" },
      { name: "productLink", placeholder: "product link" },
      {
        name: "productCategory",
        placeholder: "product category",
      },
      { name: "productType", placeholder: "product type" },
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
        {/* <h2 className='links'>Search by ID and update</h2> */}
        <div className='form-container'> {dataArray}</div>
        <div className='button-container'>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={this.handleAdd}
          >
            Add Item
          </button>
          <button
            type='button'
            className='btn btn-outline-success'
            onClick={this.handleUpdate}
          >
            Update Item
          </button>
          <button
            type='button'
            className='btn btn-outline-danger'
            onClick={this.handleDelete}
          >
            Delete Item
          </button>
        </div>
      </div>
    );
  }
}
export default Update;
