import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
  
  <div className="divItemDetail">
    <div><img src= {item.imagen} ></img></div>
    <div>
      <h3>{item.nombre}</h3>
      <p> COLOR DISPONIBLE : {item.color}</p>
      <p>{item.precio}</p>
      <p>{item.descripcion}</p>
      <ItemCount initial={1} stock={item.stock} />
    </div>
    </div>  
  )
}

export default ItemDetail