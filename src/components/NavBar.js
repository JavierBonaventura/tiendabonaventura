import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";
import Categories from "./Categories";

function NavBar(buttonClick) {

  function buttonClick() {
    document.getElementById("boton").click();
  }
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} className="" alt="logo" width={40} />
          </Link>

          <Link to="/" className="ocultar navbar-brand pl-3">
            BikeShop
          </Link>
          <button
           onClick={() => buttonClick()}
          id="boton"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="collapse"
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
