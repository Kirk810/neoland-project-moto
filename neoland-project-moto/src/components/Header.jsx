import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/Context";

const Header = () => {
  const {user, logout} = useContext(userContext);
  return (
    <header className="Header">
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {!user && <NavLink to="/login">Prices</NavLink>}
        </li>
        <li>
          {user && <NavLink to="/about">About</NavLink>}
        </li>
        <li>
          {user && <button onClick={() => logout()}>Logout</button>}
        </li>
      </nav>
    </header>
  )
} 
export default Header;