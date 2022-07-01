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
          <div className="">
            <div className="miestilo">
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
                  <p className="card-text text-secondary">Stock Disponible ({item.stock})</p>
                  {contador<item.stock ? "" :  <p className="card-text text-danger">Se alcanzo el limite de Stock Disponible</p> }
                </div>
              <div className="d-flex justify-content-center">
                <div className="w-50 ">

                {!ocultarComponente && (
                  <ItemCount 
                    contador={contador}
                    setContador={setContador}
                    ocultar={ocultar}
                    onAdd={onAdd}
                    stock={item.stock}
                    id={item.id}
                  ></ItemCount>
                )}
                <div className="d-flex justify-content-center text-center">
                  {ocultarComponente && (
                    <Link
                      to={`/cart`}
                      className="btn btn-primary m-3"
                    >
                      Terminar mi compra
                    </Link>
                  )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
