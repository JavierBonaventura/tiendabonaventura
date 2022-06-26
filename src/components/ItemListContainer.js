import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../logo.svg";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const { id } = useParams();

  const db = getFirestore();
  const productsCollection = collection(db, "productos");

  var productsFiltred = [];
  var titulo = "";

  id === undefined
    ? (productsFiltred = result)
    : (productsFiltred = result.filter(
        (categoria) => categoria.category === id
      ));
  id === undefined ? (titulo = props.greeting) : (titulo = id);

  useEffect(() => {
    if (id) {
      const q = query(productsCollection, where("category", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setResult(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });

    } else {
      
      getDocs(productsCollection)
        .then((snapshot) => {
          setResult(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <section className="py-1 text-center container">
        <div className="row py-lg-2">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light "> {titulo}</h1>
            <div className="d-flex justify-content-center">
              {loading && (
                <img src={logo} className="App-logo primary" alt="logo" />
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center">
        {loading && <h3>Cargando ...</h3>}
      </div>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ItemList products={result} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
