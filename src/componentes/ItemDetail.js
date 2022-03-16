import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
  
  <div className='sectionCard'>
        <Card style={{ width: '42rem'}}>
        <Card.Img variant="top" src= {item.imagen} />
        <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        Color disponible: {item.color}
        <br></br>
        <br></br>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui totam ullam recusandae autem hic ipsum?</p>
        <br></br>
        Precio: £{item.precio}
        </Card.Text>
        <ItemCount initial={1} stock={item.stock} />
        </Card.Body>
        </Card>
    </div>  
  )
}

export default ItemDetail