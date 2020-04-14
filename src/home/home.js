import React, { Component } from "react";
import Lips from "../images/lips.png";
import Assorted from "../images/assorted.jpg";
import Gold from "../images/goldlady.jpg";
import Shadow from "../images/shadowblue.jpg";
import Red from "../images/redhead.jpg";
import Brushes from "../images/brushes.jpg";
import "./home.css";
const url = "https://makeupinfo.herokuapp.com";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ data: res });
      });
  }
  render() {
    return (
      <div className='page'>
        <h1 className='title'>
          Makeup <span className='bomb'>Bomb</span>
        </h1>
        <h2 className='subhead'>The community-driven makeup website</h2>
        <div className='grid-container'>
          <div className='row'>
            <div className='col-sm-7 image-div'>
              <img className='lips' src={Lips} alt='lips'></img>
            </div>
            <div className='col-sm-5 image-div'>
              <img className='lips' src={Assorted} alt='lips'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-5 image-div'>
              <img className='lips' src={Gold} alt='lips'></img>
            </div>
            <div className='col-sm-7 image-div'>
              <img className='lips' src={Shadow} alt='lips'></img>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-7 image-div'>
              <img className='lips' src={Red} alt='lips'></img>{" "}
            </div>
            <div className='col-sm-5 image-div'>
              <img className='lips' src={Brushes} alt='lips'></img>
            </div>
          </div>
        </div>
        {/* <div className='grid-container'>
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
        </div> */}
      </div>
    );
  }
}

export default Home;
