
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card} from "react-bootstrap";


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
        <Button variant="dark">Ver más</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Item