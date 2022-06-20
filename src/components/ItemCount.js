export default function ItemCount({ contador, onAdd, ocultar, setContador }) {
  
  const stock = 5

  const incrementar = () => {
    if (contador < stock) {
    setContador(contador + 1);
  } else {alert("No hay mas stock")};
}

  const decrementar = () => {
    if (contador > 1) {
    setContador(contador - 1);
  }
}

  function agregarCarrito() {
    onAdd();
    ocultar();
  }

  return (
    <>
      <div className="d-flex justify-content-around">
        <button
          href="#"
          className={contador > 1 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => decrementar()}
        >
          -
        </button>
        {contador}
        <button
          href="#"
          className={contador < 5 ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => incrementar()}
        >
          +
        </button>
      </div>
      <div className="mt-3 d-flex align-items-center">
        <button
          className=" col-md-8 offset-md-2 btn btn-primary "
          onClick={() => agregarCarrito()}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
