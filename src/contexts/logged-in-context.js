import { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
    const [isLogged, setisLogged] = useState(false);

    const handleLogIn = async () => {
        const response = await axios.get()
        setisLogged(response.data);
    }
    
    return (
        <LoggedProvider.Provider value={isLogged}>
            {children}
        </LoggedProvider.Provider> 
    )
}