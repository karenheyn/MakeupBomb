import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>Home</h1>;
  }
}

export default Home;

// import React, { Component } from "react";
// import Type from "../nav/nav";
// import { Route, Link } from "react-router-dom";
// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     console.log(this.props);
//   }
//   render() {
//     console.log(this.props.filteredProductType);
//     return (
//       <div>
//         <h1>Makeup Bomb</h1>
//         <h2>The place to find the perfect pallete</h2>
//         <nav>
//           <ul>
//             {/* <li>Home</li> */}
//             <Link to='/type'>Product Type</Link>
//             <li>Product Type</li>
//             <li>Find by Hex Color</li>
//             <li>Submit a Product</li>
//           </ul>
//         </nav>
//         <main>
//           <Route path='/type' component={Type} />
//         </main>
//       </div>
//     );
//   }
// }

// export default Home;
