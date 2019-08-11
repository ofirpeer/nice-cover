import React, { Component } from "react";
import "./Photo.css";

class Photo extends Component {
  render() {
    return <img id="photo" src={this.props.imageUrl} />;
  }
}
export default Photo;
