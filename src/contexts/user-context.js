import { createContext, useEffect, useState } from 'react';
import { getToken, tokenDecoder, hasToken } from '../utils/tokens';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if(hasToken()) {
            setUserData({
                ...userData,
                ...tokenDecoder(getToken())
            })
        }
    }, [])
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider> 
    )
}