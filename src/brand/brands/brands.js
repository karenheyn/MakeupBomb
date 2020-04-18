import React, { Component } from "react";
import {
  // Card,
  CardImg,
  // CardBody,
  // CardTitle,
  // CardSubtitle,
  // Button,
} from "reactstrap";
import Description from "./description";
import "./brands.css";
const baseurl = "https://makeupinfo.herokuapp.com/product/brand/";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display: false,
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  componentDidMount() {
    const type = this.props.match.params.name;
    const url = `${baseurl}${type}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }
  toggleDescription() {
    if (this.state.display === false) {
      this.setState({ display: true });
    } else {
      this.setState({ display: false });
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div className='item-container'>
        {/* <h1 className='head'>
          {this.props.match.params.name.replace("_", " ")}
        </h1> */}
        {this.state.data.map((item) => (
          <div key={item._id} className='ca'>
            <div className='image-div'>
              <CardImg src={item.imageLink} alt='missing image'></CardImg>
            </div>
            {/* <CardBody>
              <CardTitle>
                {item.name}
                <span> {item._id}</span>
              </CardTitle>
              <CardSubtitle>price: ${item.price}</CardSubtitle>
              <CardSubtitle>
                <a href={item.productLink} target='blank'>
                  Buy
                </a>
              </CardSubtitle>
              <br></br>
              <Button
                id='abutton'
                onClick={this.toggleDescription}
                value={item.description}
              >
                description
              </Button>
              <div>
                <Description
                  data={item}
                  display={this.state.display}
                ></Description>
              </div>
            </CardBody> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Brands;
