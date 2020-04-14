import React from "react";

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
          className='form-control form-control-sm'
          name={this.props.name}
          type='text'
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          key={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
