import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="cols-1 cols-sm-2 cols-md-3 g-3">
      <div className="card shadow-sm">
        <img
          width="50%"
          height="50%"
          alt=""
          className="bd-placeholder-img card-img-top"
          src={props.product.pictureUrl}
        ></img>

        <div className="card-body">
          <h5 className="card-text">{props.product.title}</h5>
          <p className="card-text">$ {props.product.price}</p>
          <div className="d-flex justify-content-center">
            <Link
              to={`/Item/${props.product.id}`}
              className=" btn btn-primary my-2"
            >
              Detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
