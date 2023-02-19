import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/Context";

const Header = () => {
  const {user, logout} = useContext(userContext);
  return (
    <header className="Header">
      <nav>
        <NavLink to="/">Home</NavLink>
        {!user && <NavLink to="/login">Prices</NavLink>}
        {user && <NavLink to="/about">About</NavLink>}
        {user && <button onClick={() => logout()}>Logout</button>}
      </nav>
    </header>
  )
} 
export default Header;