import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";
import Categories from "./Categories";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} className="" alt="logo" width={50} />

          <Link to="/" className="navbar-brand">
            BikeShop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <Categories />
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
