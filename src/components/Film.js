import React, {Component} from "react";

class Film extends Component {
  render() {
    return(
      <div className = "film">
      <h4>{this.props.name}</h4>
      <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Film;
