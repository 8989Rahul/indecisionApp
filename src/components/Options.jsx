import React, { Component } from "react";

export default class Options extends Component {
  onRemove = () => {
    this.props.removeValue();
  };
  render() {
    return (
      <div>
        <button onClick={this.props.removeAll}>Remove all</button>
        <button
          disabled={this.props.options.length === 0}
          onClick={this.props.onRandom}
        >
          Random
        </button>
        <p>
          {this.props.options.length === 0 ? "No Value" : "Here are Your Value"}
        </p>
        <ol>
          {this.props.options.map((option, i) => (
            <li key={i}>
              {option}
              <button onClick={this.onRemove}>Remove</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
