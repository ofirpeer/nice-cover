import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Cover from "./Cover/Cover";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl:
        "https://www.barraques.cat/pngfile/big/14-149464_magnificent-ideas-nice-wallpapers-nature-hd-mother-nice.jpg"
    };
  }
  render() {
    return (
      <div className="App">
        <Cover imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default hot(module)(App);
