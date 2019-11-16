import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.data);
    let list = this.props.data.map(item => {
      return (
        <ul className='list' key={item}>
          <li>
            <Link to={item}>{item.replace("_", " ")}</Link>
          </li>{" "}
        </ul>
      );
    });
    return <div>{list}</div>;
  }
}

export default Nav;
