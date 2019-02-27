import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      list: [],
      count: 0
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    event.target.reset();
    this.setState({
      input: "",
      list: [...this.state.list, this.state.input]
    });
  };

  render() {
    return (
      <div className="todo-list">
        <h1>Task List</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">
            Add
          </button>
        </form>
        <p>0 remaining out of {this.state.list.length}</p>
        <ul>
          {this.state.list.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <style>
          {`.is-done {
          text-decoration: line-through;
        }`}
        </style>
      </div>
    );
  }
}

export default App;
