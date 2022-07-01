import { createContext, useEffect, useState } from "react";

import Item from "../components/Item";
import { doc, collection, getFirestore, updateDoc } from "firebase/firestore";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const storageCart = localStorage.getItem("cart");

  useEffect(() => {
    storageCart !== null && setCart(JSON.parse(storageCart));
  }, []);

  // Crea un nuevo producto en el carrito y le agrega la cantidad de unidades
  const addItem = (item, count) => {
    const newItem = {
      ...item,
      count,
    };

    // console.log(JSON.parse(localStorage.getItem("carrito")))

    if (inCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].count += count;
      setCart(auxArray);
      localStorage.setItem("cart", JSON.stringify(auxArray));
    } else {
      setCart([...cart, newItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    }
  };

  // Busca si ya esta el producto en el carrito y pone true or false
  const inCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  // Vacia el carrito
  const emptyCart = () => {
    setCart([]);
    localStorage.clear();
  };

  // Quita un producto (por ID) del Carrito
  const deleteItem = (id) => {
    const itemToRemove = cart.filter((e) => e.id !== id);
    localStorage.setItem("cart", JSON.stringify(itemToRemove));
    return setCart(itemToRemove);
  };

  //////////////////

  const updateStock = () => {
    const db = getFirestore();
 
    cart.map((product) => {
      const productDoc = doc(db, "productos", product.id);
      updateDoc(doc(db, "productos", product.id), {
        stock: product.stock - product.count,
      });
    });
  };

  ///////////////////////

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
        updateStock,
      }}
    >
      {" "}
      {children}{" "}
    </Provider>
  );
};

export default MyProvider;
