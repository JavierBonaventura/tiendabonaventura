import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {props.products &&
          props.products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
