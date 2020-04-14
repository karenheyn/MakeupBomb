import React from "react";
import "./input.css";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      _id: "",
      brand: "",
      name: "",
      price: "",
      imageLink: "",
      productLink: "",
      productCategory: "",
      productType: "",
    };
  }

  render() {
    return (
      <div>
        <input
          className='form-control form-control-sm crud-input'
          name={this.props.name}
          type='text'
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          key={this.props.name}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
