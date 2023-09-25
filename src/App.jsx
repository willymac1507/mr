import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Daddy",
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="text-3xl text-red-600">Hello {this.state.name}!</h1>
        <button
          onClick={() => {
            this.setState({ name: "Mummy" });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
