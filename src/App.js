import { Component } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Results from "./components/Results/Results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Results />
      </div>
    );
  }
}

export default App;
