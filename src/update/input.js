import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input
          class=' input-group-sm'
          name='_id'
          type='text'
          placeholder='Product ID'
          // value={_id}
          onChange={this.handleChange}
        />{" "}
        <button type='button' class='btn btn-primary btn-sm'>
          Small button
        </button>
        <button>Update</button>
      </div>
    );
  }
}

export default Input;
