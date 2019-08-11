import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Cover from "./Cover/Cover";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl:
        //"https://www.barraques.cat/pngfile/big/14-149464_magnificent-ideas-nice-wallpapers-nature-hd-mother-nice.jpg"
        //"https://pbs.twimg.com/profile_images/725321660484583424/ArQ4fM3k.jpg"
        "http://bit.ly/2gPLxZ4"
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
