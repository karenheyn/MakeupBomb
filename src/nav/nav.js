import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Col } from "reactstrap";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Nav>
        <Col>
          <Link to='/'>
            <NavItem>Logo</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/'>
            <NavItem>Home</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/product'>
            <NavItem>Product</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/brand'>
            <NavItem>Brands</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/about'>
            <NavItem>About</NavItem>
          </Link>
        </Col>
      </Nav>
    );
  }
}

export default Product;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Type extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productTypeArray: [],
//       filteredProductTypeArray: []
//     };
//   }

//   render() {
//     console.log(this.props);
//     let list = this.props.data.map(item => {
//       return (
//         <ul className='list' key={item}>
//           <li>
//             <Link to={item}>{item.replace("_", " ")}</Link>
//             {/* <Link to={item}>{item.replace("_", " ")}</Link> */}
//           </li>{" "}
//         </ul>
//       );
//     });
//     return <div>{list}</div>;
//   }
// }

// export default Type;
