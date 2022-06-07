import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [personaje, setPersonaje] = useState({});
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => setPersonaje(res.results[0]));
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log(personaje);
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center p-3">
      <ItemDetail personaje={personaje} />
    </div>
  );
}
