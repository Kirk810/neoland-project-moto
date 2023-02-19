import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const login = (data) => {
        setUser(data);
        navigate("/about");
    };

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <userContext.Provider value={{ user, login, logout}}>
            {children}
        </userContext.Provider>
    )
} 