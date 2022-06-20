import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Crea un nuevo producto en el carrito y le agrega la cantidad de unidades
  const addItem = (item, count) => {
    const newItem = {
      ...item,
      count,
    };

    if (inCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].count += count;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Busca si ya esta el producto en el carrito y pone true or false
  const inCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  // Vacia el carrito
  const emptyCart = () => {
    setCart([]);
  };

  // Quita un producto (por ID) del Carrito
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  // SUma todos los imtes del Carrito
  const getItemQty = () => {
    return cart.reduce((acc, item) => (acc += item.count), 0);
  };

  // Suma el precio de todos los items del Carrito
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.count), 0);
  };

  return (
    <Provider
      value={{
        cart,
        inCart,
        addItem,
        deleteItem,
        emptyCart,
        getItemQty,
        getItemPrice,
      }}
    >
      {" "}
      {children}{" "}
    </Provider>
  );
};

export default MyProvider;
