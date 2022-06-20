import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import MyProvider from "./Context/CartContext";







function App() {
  
  return (
    <>
    <MyProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a BikeShop" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart  />} />
          
        </Routes>
      </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
