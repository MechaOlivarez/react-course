import logo from '/public.../imagenesProductos/Capture.PNG'
import Cartwidget from './Cartwidget'



const Header = () => {
  return (
    <header>
    {/*  <img src={logo} className ='logo'></img>*/}
        <h1>Candle Lab</h1>
        <nav>
          <a href="">About us </a>
          <a href="">Shop online</a>
          <a href="">Contact</a>
          <Cartwidget />
        </nav>
    </header>
  )
}

export default Header