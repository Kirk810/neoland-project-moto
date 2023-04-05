import { useContext, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { userContext } from "../context/Context"
import "./Login.css";

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(userContext);
  return (
    <main className="Login">
      <h3><FormattedMessage id="login.login" /></h3>
      <div className="Input">
        <input type="text" placeholder="Username" ref={inputRef} />
        <button onClick={() => login(inputRef.current.value)}>Login</button>
      </div>
    </main>
  );
};

export default Login;