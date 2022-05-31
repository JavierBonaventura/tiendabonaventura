import React, { useState } from "react";

export default function ItemCount({ stock, initial }) {
  const [contador, setContador] = useState(initial);
  
  
  const incrementar= () => {
    setContador(contador <stock ? contador + 1 : contador);
  };

  //contador == 5 ? alert("Se alcanzo el maximo") : console.log("first")

  const decrementar= () => {
    setContador(contador >initial ? contador - 1 : contador);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card w-25">
        <div className="card-body ">
          <h5 className="card-title text-center">ITEMS EN CARRITO</h5>
          <p className="card-text">
            Items agregados a carrito: No puede ser mayor que 5 ni menor que 1
          </p>
          <div className="d-flex justify-content-between">
            <a
              href="#"
              className={contador>1 ? "btn btn-primary" : "btn btn-secondary"}
              onClick={() => decrementar()}
            >
              -
            </a>
            {contador}
            <a
              href="#"
              className={contador<5 ? "btn btn-primary" : "btn btn-secondary"}
              onClick={() => incrementar()}
            >
              +
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
