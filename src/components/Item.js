import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="card w-25 p-1 m-3">
      <img
        alt=""
        className="bd-placeholder-img card-img-top "
        src={props.product.pictureUrl}
      ></img>

      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">$ {props.product.price}</p>
        <Link
          to={`/Item/${props.product.id}`}
          className=" col-md-8 offset-md-2 btn btn-primary "
        >
          Detalle
        </Link>
      </div>
    </div>
  );
}
