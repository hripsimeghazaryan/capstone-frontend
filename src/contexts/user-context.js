import { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    //kanchel setUserData-n login i mej
    const [userData, setUserData] = useState({});
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider> 
    )
}

// disabled ete user.data is empty
// const data = useContext(UserConttext)
// <input value={data.firstName}

// if user type is admin run admin part else run user part