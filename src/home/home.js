import React, { Component } from "react";
import Lips from "../images/lips.png";
import Assorted from "../images/assorted.jpg";
import Gold from "../images/goldlady.jpg";
import Shadow from "../images/shadowblue.jpg";
import Red from "../images/redhead.jpg";
import Brushes from "../images/brushes.jpg";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='page'>
        <h1 className='title'>
          Makeup <span className='bomb'>Bomb</span>
        </h1>
        <h2 className='subhead'>The community-driven makeup website</h2>;
        <div className='grid-container'>
          <div className='grid-item'>
            <img className='lips' src={Lips} alt='lips'></img>
          </div>
          <div className='grid-item'>
            <img className='lips' src={Assorted} alt='lips'></img>
          </div>
          <div className='grid-item'>
            <img className='lips' src={Gold} alt='lips'></img>
          </div>
          <div className='grid-item'>
            <img className='lips' src={Shadow} alt='lips'></img>
          </div>
          <div className='grid-item'>
            <img className='lips' src={Red} alt='lips'></img>
          </div>
          <div className='grid-item'>
            <img className='lips' src={Brushes} alt='lips'></img>
          </div>
        </div>
      </div>
    );
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
