import React, { Component } from "react";
import NavBar from "./components/Layouts/NavBar";
import Container from "./components/Layouts/Container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />;
        <Container />
      </div>
    );
  }
}

export default App;
