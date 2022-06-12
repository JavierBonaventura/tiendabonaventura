import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import logo from "../logo.svg";
import BasePoroductos from "./BaseProductos";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';

function ItemDetailContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const products = new Promise((res, rej) => {
      setTimeout(() => {
        res(BasePoroductos)
      }, 20);
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


console.log(result)

  return (
    <>
     <div className="d-flex justify-content-center">
        {loading && <img src={logo} className="App-logo primary" alt="logo" />}
      </div>
      <div className="d-flex justify-content-center">
        {loading && <h3>Cargando ...</h3>}
      </div>

      
         <div className="d-flex justify-content-center p-3">
         {result &&  <ItemDetail product={result[id]} />}
    </div>
    </>
  );
}

export default ItemDetailContainer;
