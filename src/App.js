import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    title: "Indecision App",
    subtitle: "put your life in the hand of a computer",
    location: "hgjy",
    options: [],
    visibility: false
  };

  getLocation = location => (location ? location : "Undefine");

  formSubmite = e => {
    e.preventDefault();

    let options = [];
    let value = e.target.elements.option.value;
    if (value) {
      options.push(value);
      e.target.elements.option.value = "";
    }

    this.setState({ options: [...this.state.options, ...options] }, () =>
      console.log(this.state.options)
    );
  };

  removeAll = () => this.setState({ options: [] });

  onRandom = () => {
    let random = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[random];
    alert(option);
  };

  onVisibility = () => {
    let visibility = this.state.visibility;
    console.log(visibility);

    this.setState({ visibility: !visibility });
    console.log(this.state.visibility);
  };

  render() {
    console.log("indecision app is running");

    return (
      <div className="App">
        <button onClick={this.onVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <h1>{this.state.title}</h1>
            <h2>{this.state.subtitle}</h2>
            <p>Location : {this.getLocation(this.state.location)}</p>
            <p>
              {this.state.options.length === 0
                ? "No Options"
                : "Here are Your Options"}
            </p>
            <button onClick={this.removeAll}>Remove all</button>
            <button
              disabled={this.state.options.length === 0}
              onClick={this.onRandom}
            >
              Random
            </button>
            <ol>
              {this.state.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ol>
            <form onSubmit={this.formSubmite}>
              <input type="text" name="option" />
              <button>Add Option</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
