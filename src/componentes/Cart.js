
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { contexto } from "../context/cartContext";
import { sendBuyOrder} from "../firebase";
import {useState} from "react";


export function Cart() {


  const { carrito, removeItem, calcTotal, limpiarCarrito} = useContext(contexto);
  const [orderId, setOrderId] =useState(false);

 function handleSubmit(){
    limpiarCarrito()

    const orderData = {
      buyer: {
      name: "Juan",
      phone: 7584126896,
      email:"jl@gmail.com"
      },
      items: [...carrito],
      total: calcTotal()
    }
      sendBuyOrder(orderData).then (res => setOrderId(res));
  }


  if (carrito.length === 0) {

    return (
      
      <div>
        {orderId ? 

        <div className="msj-carrito">
          <h4>Gracias por tu compra</h4>
          <p>Orden de compra: {orderId}</p>
          <Link type="button" className="buttonTienda" to="/">Tienda</Link>
        </div>
        : 
        <div className="msj-carrito">
          <h4>No hay elementos en tu carrito</h4>
          <p>Ingresa a nuestra tienda haciendo click en:</p>
          <Link type="button" className="buttonTienda" to="/">Tienda</Link>
        </div>
        }
          
      </div>
    )}
    return(
        <div className="mensaje-carrito">
          <h2>Tu carrito</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Candle</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>total</th>
                <th>eliminar</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map(item => {
                return (
                  <tr key= {item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.cantidad}</td>
                    <td>£ {item.precio * item.cantidad}</td>
                    <td>
                    <button className="buttonRemove" onClick = {() => removeItem(item.id) }>X</button>
                    </td>
                  </tr>
                )
              }
          )}
            </tbody>
            <div className="buttonCommon">
              <span> Total: £ {calcTotal()}</span>
            </div>
          </table>
            <div className="limpiar-finalizar-button">
            <button className="buttonCommon" onClick={limpiarCarrito}>Limpiar carrito</button>
            <button className="buttonCommon" onClick={handleSubmit}>Finalizar compra</button>
            </div>
        </div>
      )
}

export default Cart