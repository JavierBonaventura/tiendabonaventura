import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, getItemPrice, deleteItem, emptyCart } = useContext(CartContext);

  if (cart.length < 1) {
    return (
      <>
        <h1 className="text-center fw-light ">No hay Items en el Carrito</h1>
        <div className="text-center">
          <Link to="/" className=" btn btn-primary">
            Seguir comprando
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="text-center fw-light ">
          Items en el Carrito Total $ {getItemPrice()}
        </h1>
        <div className="text-center">
          <button
            onClick={() => {
              emptyCart();
            }}
            className=" btn btn-danger my-3 "
          >
            {" "}
            Vaciar Carrito
          </button>
        </div>
        <div className="album py-5 bg-light">
          <div className="container ">
            {cart.map((item) => (
              <div className="col mt-3 justify-content-center" key={item.id}>
                <div className="card shadow-sm  text-center">
                  <div>
                    <img
                      alt=""
                      className="bd-placeholder-img card-img-top w-25"
                      src={item.pictureUrl}
                    ></img>
                    <h3 className="text-center">{item.title} </h3>
                    <h3 className=" text-cente text-primaryr">
                      Cantidad {item.count}{" "}
                    </h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                      className="btn btn-primary my-2"
                    >
                      {" "}
                      Elminiar Producto
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
