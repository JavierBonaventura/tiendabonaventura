import { useContext } from "react";
import carrito from "../carrito.svg";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);

  if (getItemQty() === 0) {
  } else {
    return (
      <Link to={`/cart`}>
        <div className="navbar-brand">
          <img src={carrito} className="" alt="logo" width={30} />
          {getItemQty()}
        </div>
      </Link>
    );
  }
}

export default CartWidget;
