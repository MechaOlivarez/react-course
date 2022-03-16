import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/categoria/1" className="NavLink">Sobre nosotros</Link>
        <Link to="/categoria/2" className="NavLink">Tienda </Link>
        <Link to="/categoria/3" className="NavLink">Contacto</Link>

    </nav>
  )
}

export default Nav