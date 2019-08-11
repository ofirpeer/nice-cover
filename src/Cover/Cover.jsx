import React, { Component } from "react";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div
        id="cover"
        style={{ backgroundImage: `url(${this.props.imageUrl})` }}
      >
        <div id="frost-mask" />
      </div>
    );
  }
}
export default Cover;
