import React, { Component } from "react";
import "./Icon.css";

class Icon extends Component {
  render() {
    return (
      <img id="icon" src={this.props.imageUrl} style={this.props.iconStyle} />
    );
  }
}
export default Icon;
