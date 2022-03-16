
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";



const Item = ({item}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {item.imagen} />
        <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        Color disponible: {item.color} 
        <br></br>
        Precio: £{item.precio}
        </Card.Text>
        <Link to={`/candle/${item.id}`}>Ver más</Link>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Item