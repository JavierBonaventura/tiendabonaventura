import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import logo from '../logo.svg';



function ItemListContainer(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const products = new Promise((res, rej) => {
      setTimeout(() => {
        res([     
          {id:"1",title:"Bicicleta TREK",price:5500,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/644/005/products/0131-ddb9da0ce34acf9bf316426107087903-640-0.jpg"},
          {id:"2",title:"Bicicleta SCOTT",price:7200,pictureUrl:"https://asset.scott-sports.com/fit-in/750x750/286/286399_1806870_png_zoom_5.jpg?signature=5d752566d85cf12ecc289f2d4f14bcdc623f2e1371a6de2480c2eadaf12b6f62"},
          {id:"3",title:"Bicicleta TREK",price:5500,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/644/005/products/0131-ddb9da0ce34acf9bf316426107087903-640-0.jpg"},
          {id:"4",title:"Bicicleta SCOTT",price:7200,pictureUrl:"https://asset.scott-sports.com/fit-in/750x750/286/286399_1806870_png_zoom_5.jpg?signature=5d752566d85cf12ecc289f2d4f14bcdc623f2e1371a6de2480c2eadaf12b6f62"},
          {id:"5",title:"Bicicleta TREK",price:5500,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/644/005/products/0131-ddb9da0ce34acf9bf316426107087903-640-0.jpg"},
          {id:"6",title:"Bicicleta SCOTT",price:7200,pictureUrl:"https://asset.scott-sports.com/fit-in/750x750/286/286399_1806870_png_zoom_5.jpg?signature=5d752566d85cf12ecc289f2d4f14bcdc623f2e1371a6de2480c2eadaf12b6f62"},
          {id:"7",title:"Bicicleta TREK",price:5500,pictureUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/644/005/products/0131-ddb9da0ce34acf9bf316426107087903-640-0.jpg"},
          {id:"8",title:"Bicicleta SCOTT",price:7200,pictureUrl:"https://asset.scott-sports.com/fit-in/750x750/286/286399_1806870_png_zoom_5.jpg?signature=5d752566d85cf12ecc289f2d4f14bcdc623f2e1371a6de2480c2eadaf12b6f62"},  
           ]);
      }, 3000);
    });

    products
    .then((result) => {
      setResult(result);
    })
    .catch((error) => {
      setError(error);
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);


  return (
    <div className='navbar-brand'>
    <h3 className='display-1 text-center'> {props.greeting}</h3>
    <div className='display-1 text-center'>
      {loading && <img src={logo} className="App-logo w-25" alt="logo" />}
      {loading && <h3>Cargando ...</h3>}
      </div> 
    <ItemList products={result}/>     
    </div>
  );
}

export default ItemListContainer;
