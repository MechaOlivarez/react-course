import { Link } from "react-router-dom"


const Cartwidget = () => {
  return (
  <Link to="/cart" element={<Cartwidget/>}>
    <span className="material-icons">shopping_cart</span>
  </Link>  
  )
}

export default Cartwidget