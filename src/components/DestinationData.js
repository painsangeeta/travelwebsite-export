import { Component } from "react";
import Mountain1 from "../assets/mt1.jpg";
import Mountain2 from "../assets/mt2.jpg";
import Mountain3 from "../assets/mt3.jpg";
import Mountain4 from "../assets/mt4.jpg";

import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="dest-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
