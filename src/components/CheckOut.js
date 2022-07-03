import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "../form.css";

export default function CheckOut() {
  const [redirect, setRedirect] = useState(false);

  const willRedirect = () => {
    return setRedirect(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const [form, setForm] = useState({});
  const [orderId, setOrderId] = useState([]);

  const { cart, getItemPrice, updateStock, emptyCart } =
    useContext(CartContext);

  const shouldRedirect = false;
  const onSubmit = (data) => {
    const buyer = {
      name: data.firstName,
      phone: data.celular,
      email: data.email,
    };
    const order = {
      buyer: buyer,
      items: { cart },
      total: getItemPrice(),
      date: Date(),
    };
    console.log(order);
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    updateStock();
    emptyCart();

    willRedirect();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-center album  bg-light">
          <div className="d-flex flex-column form-group w-75 m-5 card shadow-sm">
            <div className="form-group w-100 p-3">
              <label className="text-dark">Nombre y Apellido</label>
              <input
                className="form-control"
                name="name"
                placeholder="Ingrese su nombre y apellido"
                {...register("firstName", {
                  required: true,
                  maxLength: 30,
                  pattern: /^[A-Za-z\s]+$/i,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p className="p">Este campo es obligatorio</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className="p">No puede superar los 30 caracteres</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p className="p">No es posible ingresar simbolos</p>
              )}

              <label className="text-dark">Email</label>
              <input
                className="form-control"
                name="email"
                placeholder="Ingrese su direccion de e-mail"
                {...register("email", {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="p">Este campo es obligatorio</p>
              )}
              {errors?.email?.type === "maxLength" && (
                <p className="p">No puede superar los 30 caracteres</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="p">Debe ingresar una direccion de mail valida</p>
              )}

              <label className="text-dark">Numero de Celular</label>
              <input
                className="form-control"
                name="phone"
                placeholder="Ingrese su numero celular"
                {...register("celular", {
                  required: true,
                  maxLength: 20,
                  pattern:
                    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
                })}
              />
              {errors?.celular?.type === "required" && (
                <p className="p">Este campo es obligatorio</p>
              )}
              {errors?.celular?.type === "maxLength" && (
                <p className="p">No puede superar los 20 caracteres</p>
              )}
              {errors?.celular?.type === "pattern" && (
                <p className="p">
                  Debe ingresar un numero de Telefono Valido (10 digitos)
                </p>
              )}
            </div>

            <div className="d-flex justify-content-center text-center">
              {/* <Link to="/" onClick={ (event) => event.preventDefault() } > */}
              <button
                type="submit"
                disabled={false}
                className="btn btn-primary m-3"
              >
                Terminar Compra
                {/* onClick={blqCompra ? () => handleClick() : console.log("soy false")} */}
              </button>
              {/* </Link> */}
              {redirect && <Navigate replace to="/" />}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
