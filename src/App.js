import React from "react";
import "./App.css";
import Type from "./nav/nav";
import { Route, Link } from "react-router-dom";
import Home from "./home/home";

const url = "http://localhost:4000/product";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      productTypeArray: [],
      filteredProductTypeArray: []
    };
  }
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
  }
  render() {
    console.log(this.state.data);
    this.state.data.map(type =>
      this.state.productTypeArray.push(type.productType)
    );
    let filteredProductType = [...new Set(this.state.productTypeArray)];
    console.log(filteredProductType);
    return (
      <div>
        <div>{/* <Type data={filteredProductType}></Type> */}</div>
        <main>
          <Route
            path='/'
            render={routerProps => (
              <Home
                data={this.state.filteredProductTypeArray}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path={filteredProductType} //need to set component name to equal filteredProducttype name
            render={routerProps => (
              <Link
                data={this.state.filteredProductTypeArray}
                {...routerProps}
                {...this.state}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
