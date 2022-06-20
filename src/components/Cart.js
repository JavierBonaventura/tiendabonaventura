import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cart, getItemPrice, deleteItem, emptyCart } = useContext(CartContext);

  return (
    <>
      <h1 className="text-center">
        ITEMS EN EL CARRITO Total $ {getItemPrice()}
      </h1>
      <div class="text-center">
        <button
          onClick={() => {
            emptyCart();
          }}
          className=" btn btn-primary "
        >
          {" "}
          Vaciar Carrito
        </button>
      </div>
      {cart.map((item) => (
        <div className="mt-3 d-flex justify-content-center" key={item.id}>
          <div className="card border border-dark p-3 w-50 text-center">
            <div>
              <img
                className="bd-placeholder-img card-img-top w-25"
                src={item.pictureUrl}
              ></img>
              <h3 className="text-center">{item.title} </h3>
              <h3 className=" text-cente text-primaryr">
                Cantidad {item.count}{" "}
              </h3>
            </div>
            <div className="mt-3 d-flex align-items-center">
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
                className="col-md-8 offset-md-2 btn btn-primary "
              >
                {" "}
                Elminiar Producto
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
