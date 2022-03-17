import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/categoria/color1" className="NavLink">Velas blancas </Link>
        <Link to="/categoria/color2" className="NavLink">Velas colores</Link>
        <Link to="/categoria/otros" className="NavLink">Otros productos</Link>

    </nav>
  )
}

export default Nav