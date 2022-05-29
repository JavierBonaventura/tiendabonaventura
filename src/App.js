import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ItemListContainer greeting="<CODERHOUSE> REACT!!!" />
        <ItemCount stock={5} initial={1}/>
      </React.Fragment>
    );
  }
}

export default App;
