import React, { Component } from "react";

export default class ItemCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: props.initial,
    };
  }

 
    

incrementar() {
    if (this.state.numero < 5) {
    this.setState({ numero: this.state.numero + 1 });
  }
}


  decrementar() {
    if (this.state.numero > 1) {
    this.setState({ numero: this.state.numero - 1 });
  }
  }
  render() {
    return (
         <div className="d-flex justify-content-center">
         <div className="card w-25">
          <div className="card-body ">
            <h5 className="card-title text-center">ITEMS EN CARRITO</h5>
            <p className="card-text">
              Items agregados a carrito: No puede ser mayor que 5 ni menor que 1
            </p>
            <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-primary" onClick={() => this.decrementar()}>
               - 
            </a>
           {this.state.numero}
           <a href="#" className="btn btn-primary" onClick={() => this.incrementar()}>
              +
            </a>
            
            </div>
          </div>
        </div>
        </div>
      
      
    );
  }
}
