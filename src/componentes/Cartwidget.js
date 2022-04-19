import { Link } from "react-router-dom"
import { useContext } from "react";
import { contexto } from "../context/cartContext";



const Cartwidget = () => {

  const { calcCantidad } = useContext(contexto)
 
  return (
    <Link to="/cart" element={<Cartwidget/>}>
      <span className="material-icons">shopping_cart</span>
      <span className="estado">{calcCantidad() === 0 ? null : calcCantidad()}</span>
    </Link>  
  )
}

export default Cartwidget
