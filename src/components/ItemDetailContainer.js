import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
import BasePoroductos from "./BaseProductos";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
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

  const productFiltered = result.find(
    (productFilter) => productFilter.id === id)


  return (
    <>
     <div className="d-flex justify-content-center">
        {loading && <img src={logo} className="App-logo primary" alt="logo" />}
      </div>
      <div className="d-flex justify-content-center">
        {loading && <h3>Cargando ...</h3>}
      </div>

      
         <div className="d-flex justify-content-center p-3">
         {result &&  <ItemDetail product={productFiltered} />}
    </div>
    </>
  );
}

export default ItemDetailContainer;
