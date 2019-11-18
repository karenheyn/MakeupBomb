import React from "react";
import "./App.css";
import Home from "./home/home";
import Type from "./product/type/type";
import Nav from "./nav/nav";
import About from "./about/about";
import Product from "./product/product";
import Brand from "./brand/brand";
import { Route, Link } from "react-router-dom";
import Brands from "./brand/brands/brands";
import Add from "./add/add";
import Update from "./update/update";
import Delete from "./Delete/delete";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/brand' exact component={Brand} />
        <Route path='/product' exact component={Product} />
        <Route path='/product/:name' component={Type} />
        <Route path='/brand/:name' component={Brands} />
        <Route path='/add' component={Add} />
        <Route path='/update' component={Update} />
        <Route path='/remove' component={Delete} />
      </div>
    );
  }
}

export default App;
