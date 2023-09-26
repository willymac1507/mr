import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState(() => {
          return { monsters: json };
        }),
      );
  }

  render() {
    console.log("Render");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <div className="mb-6">
          <label
            className="block mb-2 uppercase font-bold text-xs text-gray-700"
            htmlFor="search"
          />

          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="text"
            name="search"
            id="search"
            placeholder="search monsters"
            onChange={(e) => {
              const searchField = e.target.value.toLowerCase();
              this.setState(() => {
                return { searchField };
              });
            }}
          />
        </div>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1 className="text-3xl">{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
