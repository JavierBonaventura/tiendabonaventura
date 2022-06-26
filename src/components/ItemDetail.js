import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail(product) {
  const inicial = 1;
  const [contador, setContador] = useState(inicial);
  const { addItem, inCart } = useContext(CartContext);

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
        <div className="album py-5 bg-light">
          <div className="container ">
            <div className="col">
              <div className="card shadow-sm ">
                <img
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  alt=""
                  className=" bd-placeholder-img card-img-top"
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
                      className="col-md-10 offset-md-1 btn btn-primary my-2"
                    >
                      Terminar mi compra
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
