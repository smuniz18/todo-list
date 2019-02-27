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
        <h3>Total list items = {this.state.list.length}</h3>
        <ul>
          {this.state.list.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
