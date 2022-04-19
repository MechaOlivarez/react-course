import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav'>
        <Link to="/categoria/Blanco" className='NavLink'>Velas blancas </Link>
        <Link to="/categoria/Celeste" className='NavLink'>Velas de colores</Link>
        <Link to="/categoria/Negro" className='NavLink'>Velas negras</Link>
    </nav>
  )
}

export default Nav