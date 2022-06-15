import { useState } from "react";
import ItemCount from "./ItemCount"
import {Link} from 'react-router-dom';

export default function ItemDetail(product, onAdd) {
  const [ocultarComponente, setOcultarComponente] = useState(false);

  const ocultar = () => {
   setOcultarComponente(true)
  }


  return (
    <>
      {product.product && (
        <div className="card border border-dark p-3 w-25">
          <img
            className="bd-placeholder-img card-img-top"
            src={product.product.pictureUrl}
          ></img>

          <h2 className="text-center">{product.product.title}</h2>

          <div className="card-body">
            <h5 className="card-title">Categoria: {product.product.category}</h5>

            <p className="card-text">Precio: $ {product.product.price}</p>
          </div>
          {!ocultarComponente && <ItemCount onAdd={ocultar}></ItemCount>}
          <div className="mt-3 d-flex align-items-center">
          {ocultarComponente &&<Link to={`/cart`} className="col-md-8 offset-md-2 btn btn-primary">Ir al carrito</Link>}
     </div>
        </div>
      )}
    </>
  );
}
