import React, { Component } from "react";
import axios from "../../node_modules/axios";

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
      productType: ""
    };
    this.handleChange = this.handleChange.bind();
    this.onSubmit = this.onSubmit.bind();
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    axios
      .put(
        `https://makeupinfo.herokuapp.com/product${this.state._id}`,
        this.state
      )
      .then(res => {
        console.log(res);
      })
      .then(err => {
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
      productType
    } = this.state;
    return (
      <div>
        <h2 className='links'>Search by ID and update</h2>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            class='form-control'
            name='_id'
            type='text'
            placeholder='Product ID'
            value={_id}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='brand'
            type='text'
            placeholder='Brand'
            value={brand}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='name'
            type='text'
            placeholder='Product Name'
            value={name}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='price'
            type='text'
            placeholder='Price'
            value={price}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='imageLink'
            type='text'
            placeholder='Image Link'
            value={imageLink}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='productLink'
            type='text'
            placeholder='Product Link'
            value={productLink}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='productCategory'
            type='text'
            placeholder='Product Category'
            value={productCategory}
            onChange={this.handleChange}
          />
          <input
            class='form-control'
            name='productType'
            type='text'
            placeholder='Product Type'
            value={productType}
            onChange={this.handleChange}
          />
          <div className='btn' id='btn'>
            <input type='submit' value='Submit' className='btn btn-secondary' />
          </div>
        </form>
      </div>
    );
  }
}
export default Update;
