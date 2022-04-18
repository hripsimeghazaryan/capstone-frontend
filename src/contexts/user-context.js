import { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("register/personal");
            setUserData(data);
        }
        fetchData();
    }, [])

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider> 
    )
}

// disabled ete user.data is empty
// const data = useContext(UserConttext)
// <input value={data.firstName}

// if user type is admin run admin part else run user part