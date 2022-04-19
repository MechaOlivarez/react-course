import { Link } from 'react-router-dom'
import logo from '../logoMarca.png'
import Cartwidget from './Cartwidget'
import Nav from './Nav'


const Header = () => {

  return (
    <header>
      <div className="contenedor-logo">
      <img src={logo} className ='logo'></img>
        <Link className="tituloPrincipal" to="/">
          <h1>Candle Lab</h1>
        </Link>
      </div>
      <div className= "contenedor-links">
      <Nav/> 
        <Link className="container-carrito" to="/carrito"><Cartwidget /></Link>
      </div>
    </header>
  )
}

export default Header