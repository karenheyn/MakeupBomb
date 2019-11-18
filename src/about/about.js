import React, { Component } from "react";
import "./about.css";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='wrapper'>
        <h1 className='heading'>About</h1>
        <p className='info'>
          Makeup Bomb is a community-based website for all of your makeup needs.
          This site relies on users like you to update content. To add a
          product, click 'Add' on the navigation bar and fill out all the
          details of the item you are inputting. To update an existing item, do
          so under 'Update'. Made a mistake? Found a product that is no longer
          in production? Remove it be entering its Id number under the 'delete'
          page.
        </p>
        <br></br>
        <h1 className='bottom'>
          Stay Beautiful
          <span role='img' label='i'>
            {" "}
            💅
          </span>
        </h1>
      </div>
    );
  }
}

export default About;
