import React, { Component } from "react";
import Photo from "../Photo/Photo";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div
        id="cover"
        style={{ backgroundImage: `url(${this.props.imageUrl})` }}
      >
        <div id="frost-mask" />
        <Photo imageUrl={this.props.imageUrl} />
      </div>
    );
  }
}
export default Cover;
