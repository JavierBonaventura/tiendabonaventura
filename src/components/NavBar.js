import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <img src={logo} className="" alt="logo" width={50} />

          <Link to="/" className="navbar-brand">
            BikeShop
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
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
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
