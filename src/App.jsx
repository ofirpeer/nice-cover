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
        //"http://bit.ly/2gPLxZ4"
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/fruit-trees.jpg"
      //"https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/bonsai-trees.jpg"
      //"https://images-platform.99static.com/8TVfQCr1NjZu5qLQE8WIJAE7pdk=/340x0:1288x948/500x500/top/smart/99designs-contests-attachments/90/90737/attachment_90737669"
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
