import carrito from '../carrito.svg';


function CartWidget(props) {
  return (
    <div className='navbar-brand'>
    <img src={carrito} className="" alt="logo" width={50}/>
     {props.enCarrito}
    </div>
  );
}

export default CartWidget;


