import { Link } from "react-router-dom"


const Cartwidget = () => {
  return (
  <Link to="/" element={<Cartwidget/>}>
    <span class="material-icons">shopping_cart</span>
  </Link>  
  )
}

export default Cartwidget