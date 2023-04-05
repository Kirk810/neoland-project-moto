import "./Header.css";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { userContext } from "../context/Context";

const Header = () => {
  const {user, logout} = useContext(userContext);
  return (
    <header className="Header">
      <nav>
        <li>
          <NavLink to="/"><FormattedMessage id="header.home" /></NavLink>
        </li>
        <li>
          {!user && <NavLink to="/login"><FormattedMessage id="header.login" /></NavLink>}
        </li>
        <li>
          {user && <NavLink to="/about"><FormattedMessage id="header.gallery" /></NavLink>}
        </li>
        <li>
          {user && <button onClick={() => logout()}>Logout</button>}
        </li>
      </nav>
    </header>
  )
} 
export default Header;