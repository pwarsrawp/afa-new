import { useContext, } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div id="navbar-wrapper">
      <div id="navbar-links">
        <Link to='/'>Inicio</Link>        
        <Link to='/clases'>Clases</Link>
        {isLoggedIn 
        ? <Link to='/perfil'>Mi perfil</Link> 
        : <><Link to='/login'>Login</Link><Link to='/registro'>Registro</Link></>}
      </div>
    </div>
  )
}

export default Navbar