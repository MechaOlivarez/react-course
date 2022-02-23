import logo from '../imagenes/Capture.PNG'


const Header = () => {
  return (
    <header>
      <img src={logo} className ="logo"
      />
        <h1>Candle studio</h1>
        <nav>
            <a href="">About us </a>
            <a href="">Shop online</a>
            <a href="">Contact</a>
        </nav>
    </header>
  )
}

export default Header