import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer/>
      {/* <ItemListContainer greeting="<CODERHOUSE> REACT!!!" />
      <ItemCount stock={5} initial={1} /> */}
    </>
  );
}

export default App;
