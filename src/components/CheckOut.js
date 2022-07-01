import React from 'react'
import {CartContext} from '../Context/CartContext';
import {useContext, useState} from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from "react-router-dom";

export default function CheckOut() {

    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const [form, setForm] = useState({})
    const [orderId, setOrderId] = useState([])

    const { cart, getItemPrice, updateStock, emptyCart } = useContext(CartContext);
    
    function handleClick () {

    const order = {
        buyer: form,
        items: cart,
        total: getItemPrice(),
        date:   Date()
    }
    updateStock()
    emptyCart()
    

    

    addDoc(ordersCollection, order).then(({ id})=> setOrderId(id))

   
}
   
function handleChange (e) {
    setForm({...form, [e.target.name]:e.target.value})
}




  return (
    <>
    <div className="d-flex justify-content-center album  bg-light">
    <div className="d-flex flex-column form-group w-75 m-5 card shadow-sm">
     <div className="form-group w-100 p-3">
    <label className="" >Nombre y Apellido</label>
    <input type="text" className="form-control " onChange={handleChange} name="name" placeholder="Ingrese su nombre y apellido"></input>
  </div>
  <div className="form-group  w-100 pb-3 pl-3 pr-3">
    <label className="" >Email</label>
    <input type="text" className="form-control" onChange={handleChange} name="email" placeholder="Ingrese su direccion de e-mail"></input>
  </div>
  <div className="form-group  w-100 pb-3 pl-3 pr-3">
    <label className="" >Numero Celular</label>
    <input type="text" className="form-control" onChange={handleChange} name="phone"  placeholder="Ingrese su numero celular"></input>
  </div>
  <div className="d-flex justify-content-center text-center">

         
          <Link to="/" className="btn btn-primary m-3" onClick={handleClick}>Terminar Compra </Link>
  </div>
  </div>
  </div>
 
  </>

  )
}
