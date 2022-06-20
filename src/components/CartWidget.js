import { useContext } from "react";
import carrito from "../carrito.svg";
import { CartContext } from "../Context/CartContext";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);
  return (
    <div className="navbar-brand">
      <img src={carrito} className="" alt="logo" width={50} />
      {getItemQty()}
    </div>
  );
}

export default CartWidget;
