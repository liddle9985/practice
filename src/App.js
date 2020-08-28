import React, { Component } from "react";
import "./App.css";
import CounterContainer from "./container/CounterContainer";
import PaletteContainer from "./container/PaletteContainer";
import WaitingListContainer from "./container/WaitingListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer selected="red" />
        <CounterContainer />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
