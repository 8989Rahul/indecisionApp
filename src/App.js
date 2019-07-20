import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Options from "./components/Options";
import Option from "./components/Option";

export default class App extends Component {
  state = {
    title: "Indecision App",
    subTitle: "put your life in the hand of a computer",
    options: [],
    visibility: false
  };

  optionSubmite = value => {
    if (!value) {
      return "Enter a valid value";
    } else if (this.state.options.indexOf(value) > -1) {
      return "This value already exist";
    }

    this.setState(prevState => {
      return { options: prevState.options.concat(value) };
    });
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
    console.log();

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
            <Header title={this.state.title} subTitle={this.state.subTitle} />
            <Options
              options={this.state.options}
              removeAll={this.removeAll}
              onRandom={this.onRandom}
            />
            <Option optionSubmite={this.optionSubmite} />
          </div>
        )}
      </div>
    );
  }
}
