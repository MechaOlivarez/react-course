import { Link } from 'react-router-dom'
import logo from '../Capture.png'
import Cartwidget from './Cartwidget'
import Nav from './Nav'



const Header = () => {
  return (
    <header>
        <img src={logo} className ='logo'></img>
        <Link to="/">
          <h1>Candle Lab</h1>
        </Link>
        <Nav/> 
        <Link to="/carrito"><Cartwidget /></Link>
        
    </header>
  )
}

export default Header