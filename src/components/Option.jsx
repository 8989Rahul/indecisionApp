import React, { Component } from "react";

export default class Option extends Component {
  state = {
    error: ""
  };
  optionSubmite = e => {
    e.preventDefault();

    let value = e.target.elements.option.value.trim();

    let error = this.props.optionSubmite(value);

    this.setState({ error });

    e.target.elements.option.value = "";
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.optionSubmite}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
