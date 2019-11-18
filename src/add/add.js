import React, { Component } from "react";
import axios from "../../node_modules/axios";

class Add extends Component {
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
      .post("http://localhost:4000/product", this.state)
      .then(res => {
        console.log(res);
      })
      .then(err => {
        console.log(err);
      });
    // this.setState({
    //   _id: "",
    //   brand: "",
    //   name: "",
    //   price: "",
    //   imageLink: "",
    //   productLink: "",
    //   category: "",
    //   productType: ""
    // });
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
      <form onSubmit={this.onSubmit}>
        <input
          name='_id'
          type='text'
          placeholder='Product ID'
          value={_id}
          onChange={this.handleChange}
        />
        <input
          name='brand'
          type='text'
          placeholder='Brand'
          value={brand}
          onChange={this.handleChange}
        />
        <input
          name='name'
          type='text'
          placeholder='Product Name'
          value={name}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='text'
          placeholder='Price'
          value={price}
          onChange={this.handleChange}
        />
        <input
          name='imageLink'
          type='text'
          placeholder='Image Link'
          value={imageLink}
          onChange={this.handleChange}
        />
        <input
          name='productLink'
          type='text'
          placeholder='Product Link'
          value={productLink}
          onChange={this.handleChange}
        />
        <input
          name='productCategory'
          type='text'
          placeholder='Product Category'
          value={productCategory}
          onChange={this.handleChange}
        />
        <input
          name='productType'
          type='text'
          placeholder='Product Type'
          value={productType}
          onChange={this.handleChange}
        />
        <div className='btn'>
          <input type='submit' value='Submit' className='btn btn-primary' />
        </div>
      </form>
    );
  }
}
export default Add;
