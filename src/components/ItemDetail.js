import { useState } from "react";

export default function ItemDetail(props) {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <>
      {props.product && (
        <div className="card border border-dark p-3 w-25">
          <img
            className="bd-placeholder-img card-img-top"
            src={props.product.pictureUrl}
          ></img>

          <h2 className="text-center">{props.product.title}</h2>

          <div className="card-body">
            <h5 className="card-title">Categoria: {props.product.category}</h5>

            <p className="card-text">Precio: $ {props.product.price}</p>
            <a
              href="#"
              className="col-md-8 offset-md-2 btn btn-primary"
              onClick={() => incrementar()}
            >
              Agregar al Carrito{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
