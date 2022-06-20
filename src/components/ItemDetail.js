import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail(product) {
  const inicial = 1;
  const [contador, setContador] = useState(inicial);
  const { addItem, inCart, cart } = useContext(CartContext);

  const item = product.product;
  const id = item.id;

  const [ocultarComponente, setOcultarComponente] = useState(false);

  const ocultar = () => {
    setOcultarComponente(true);
  };

  const reset = () => {
    setContador(inicial);
  };

  const onAdd = () => {
    addItem(item, contador);
    inCart(id);
    reset();
  };

  return (
    <>
      {item && (
        <div className="card border border-dark p-3 w-25">
          <img
            className="bd-placeholder-img card-img-top"
            src={item.pictureUrl}
          ></img>

          <h2 className="text-center">{item.title}</h2>

          <div className="card-body">
            <h5 className="card-title">Categoria: {item.category}</h5>

            <p className="card-text">Precio: $ {item.price}</p>
          </div>

          {!ocultarComponente && (
            <ItemCount
              contador={contador}
              setContador={setContador}
              ocultar={ocultar}
              onAdd={onAdd}
            ></ItemCount>
          )}
          <div className="mt-3 d-flex align-items-center">
            {ocultarComponente && (
              <Link
                to={`/cart`}
                className="col-md-8 offset-md-2 btn btn-primary"
              >
                Ir al carrito
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
