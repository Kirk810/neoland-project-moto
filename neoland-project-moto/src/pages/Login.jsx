import { useContext, useRef } from "react";
import { userContext } from "../context/Context"
import "./Login.css";

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(userContext);
  return (
    <main className="Login">
      <h3>To see the prices log in!!</h3>
      <div className="Input">
        <input type="text" placeholder="Username" ref={inputRef} />
        <button onClick={() => login(inputRef.current.value)}>Login</button>
      </div>
    </main>
  );
};

export default Login;