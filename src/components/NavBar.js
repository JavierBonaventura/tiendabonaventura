import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <img src={logo} className="" alt="logo" width={50} />

      <Link to="/" className="navbar-brand">
        BikeShop
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"></li>
          <li className="nav-item">
            <Link to="/category/Bicicletas" className="nav-link">
              Biciletas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Indumentaria" className="nav-link">
              Indumentaria
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Velocimetro" className="nav-link">
              Velocimetros
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget enCarrito="4" />
    </nav>
  );
}

export default NavBar;
