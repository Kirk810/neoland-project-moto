import { useContext, useRef } from "react";
import { userContext } from "../context/Context"

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(userContext);
  return (
    <main>
      <input type="text" placeholder="Username..." ref={inputRef} />
      <button onClick={() => login(inputRef.current.value)}>Login</button>
    </main>
  );
};

export default Login;