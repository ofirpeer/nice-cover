import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div
        id="cover"
        style={Object.assign(
          { backgroundImage: `url(${this.props.imageUrl})` },
          this.props.coverStyle
        )}
      >
        <div id="frost-mask" />
        <Icon imageUrl={this.props.imageUrl} iconStyle={this.props.iconStyle} />
      </div>
    );
  }
}
export default Cover;
