import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ItemListContainer greeting="<CODERHOUSE> REACT!!!" />
      </React.Fragment>
    );
  }
}

export default App;
