import React, { Component } from "react";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

import CELEBS from "./data/CELEBS";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celebs: CELEBS,
    };
  }

  render() {
    const { celebs } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Home celebs={celebs} />
      </React.Fragment>
    );
  }
}

export default App;
