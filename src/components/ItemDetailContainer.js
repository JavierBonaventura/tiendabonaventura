import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "productos", id);

    getDoc(productRef)
      .then((snapshot) => {
        setResult({ ...snapshot.data(), id: snapshot.id });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="d-flex justify-content-center">
        {loading && <img src={logo} className="App-logo primary" alt="logo" />}
      </div>
      <div className="d-flex justify-content-center">
        {loading && <h3>Cargando ...</h3>}
      </div>

      <div className="d-flex justify-content-center p-3">
        {result && <ItemDetail product={result} />}
      </div>
    </>
  );
}

export default ItemDetailContainer;
