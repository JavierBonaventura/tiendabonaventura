import Item from "./Item";

export default function ItemList(props) {
  return (
    <>
      {props.products &&
        props.products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
    </>
  );
}
