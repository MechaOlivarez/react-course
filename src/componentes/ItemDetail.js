import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useContext } from 'react';
import { contexto } from '../context/miContexto';

const ItemDetail = ({item}) => {

  const [contadorEnCarrito,setContadorEnCarrito] = React.useState(0);
  
  function onAdd(contador) {
  setContadorEnCarrito(contador)

}
  
  
  return (
  <div className='divItemDetail'>
    <div><img src= {item.imagen} alt="velas" ></img></div>
    <div>
      <h3>{item.nombre}</h3>
      <p> COLOR DISPONIBLE : {item.color}</p>
      <p>{item.precio}</p>
      <p>{item.descripcion}</p>
    
      {
        contadorEnCarrito === 0 ? <ItemCount  onAdd={onAdd} initial={1} stock={item.stock} /> 
        :
        <Link to="/" element={<Cart/>}>Finalizar compra</Link>
      }
      
      
    </div>
    </div>  
  )
}

export default ItemDetail