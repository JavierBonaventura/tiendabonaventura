import React from "react";

export default function ItemDetail(props) {
  return (
    <>
      <div className="card border border-dark p-3">
        <img
          className="bd-placeholder-img card-img-top"
          src={props.personaje.image}
        ></img>
        <h2 className="text-center">{props.personaje.name}</h2>
        <div className="card-body">
          <h5 className="card-title">Gender: {props.personaje.gender}</h5>
          <p className="card-text">Created: {props.personaje.created}</p>
          <p className="card-text">Specie: {props.personaje.species}</p>
        </div>
      </div>
    </>
  );
}
