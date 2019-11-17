import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <h3>logo</h3>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/product'>
            <li>Product type</li>
          </Link>
          <Link to='/brand'>
            <li>Brands</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
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
