import React, { Component } from "react";
import "./App.css";
import { MyComponent } from "./MyComponent";

class App extends Component {
  render() {
    return <MyComponent callback={console.log} />;
  }
}

export default App;
