import React, { useState } from "react";

export default function ItemCount({ onAdd }) {
  const [contador, setContador] = useState(1);


  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };



  return (
  
    <>
      <div className="d-flex justify-content-around">
        <button
          href="#"
          className={contador > 1 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => decrementar()}
        >
          -
        </button>
        {contador}
        <button
          href="#"
          className={contador < 5 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => incrementar()}
        >
          +
        </button>
      </div>
      <div className="mt-3 d-flex align-items-center">
        <button className=" col-md-8 offset-md-2 btn btn-primary " onClick={() => onAdd()}>    
        Agregar al carrito
        </button>
      </div>
    </>
 
  );
}
