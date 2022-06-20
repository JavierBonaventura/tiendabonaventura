import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
import BasePoroductos from "./BaseProductos";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const { id } = useParams();

  var productsFiltred = [];
  var titulo = "";

  id == undefined
    ? (productsFiltred = result)
    : (productsFiltred = result.filter(
        (categoria) => categoria.category == id
      ));
  id == undefined ? (titulo = props.greeting) : (titulo = id);

  useEffect(() => {
    const products = new Promise((res, rej) => {
      setTimeout(() => {
        res(BasePoroductos);
      }, 2000);
    });

    products
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <h3 className="fs-7 text text-center text-secondary p-2 "> {titulo}</h3>
      <div className="d-flex justify-content-center">
        {loading && <img src={logo} className="App-logo primary" alt="logo" />}
      </div>
      <div className="d-flex justify-content-center">
        {loading && <h3>Cargando ...</h3>}
      </div>

      <div className="navbar-brand">
        <ItemList products={productsFiltred} />
      </div>
    </>
  );
}

export default ItemListContainer;
