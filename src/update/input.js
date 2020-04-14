import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
    console.log(this.state.value);
  };
  render() {
    const data = this.props.props;
    const dataArray = data.map((item) => (
      <input
        className='form-control form-control-sm'
        name='_id'
        type='text'
        placeholder={item.placeholder}
        value={item._id}
        onChange={this.handleChange}
        key={item.name}
      />
    ));
    return <div>{dataArray}</div>;
  }
}
//   const listItems = inputProps.map((number) =>
// <li>{number}</li>
// inputProps.map((item) => <div> {item.placeholder} </div>);
//   console.log(this.props.placeholder);
//   return (
//     <div>
// <input
//   className='form-control form-control-sm'
//   name='_id'
//   type='text'
//   placeholder={this.props.placeholder}
//   // value={_id}

//   onChange={this.handleChange}
// />
//     </div>
//   );
// }
// }

export default Input;
