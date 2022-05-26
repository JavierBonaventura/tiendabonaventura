import carrito from '../carrito.svg';


function ItemListContainer(props) {
  return (
    <div className='navbar-brand'>
    <h3 className='display-1 text-center'> {props.greeting}</h3>
     
    </div>
  );
}

export default ItemListContainer;
