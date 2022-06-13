import React, { Component } from "react";
import "./Results.scss";

export default class Results extends Component {
  state = {
    displayedArray: [1, 2, 3, 4, 5],
  };
  render() {
    return (
      <section className="results__section">
        <h2 className="results__heading">Results</h2>
        {this.state.displayedArray.map((film) => {
          if (this.state.displayedArray.length > 0)
            return <div className="otherVideos__thumbnail-container">Test</div>;
        })}
      </section>
    );
  }
}
