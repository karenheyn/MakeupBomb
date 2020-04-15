import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Col } from "reactstrap";
import "./nav.css";
import Mouth from "../images/mouth.svg";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Nav className='nav'>
        {/* <Col>
          <Link to='/'>
            <NavItem className='nav-item'>
              <img src={Mouth} alt='icon'></img>
            </NavItem>
          </Link>
        </Col> */}
        <Col>
          <Link to='/product'>
            <NavItem className='nav-item'>Product</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/brand'>
            <NavItem className='nav-item'>Brands</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/'>
            <NavItem className='nav-item nav-title'>
              <h1 className='title'>
                Makeup <span className='bomb'>Bomb</span>
              </h1>
            </NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/update'>
            <NavItem className='nav-item'>Update</NavItem>
          </Link>
        </Col>
        <Col>
          <Link to='/about'>
            <NavItem className='nav-item'>About</NavItem>
          </Link>
        </Col>
      </Nav>
    );
  }
}

export default Product;
