import React, { Component } from "react";
import axios from "../../node_modules/axios";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: ""
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
      .delete(
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
    const { _id } = this.state;
    return (
      <div>
        <h2 className='links'>Remove a discontinued product</h2>
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
          <div className='btn'>
            <input type='submit' value='Submit' className='btn btn-secondary' />
          </div>
        </form>
      </div>
    );
  }
}
export default Delete;
