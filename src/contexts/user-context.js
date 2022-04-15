import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value="">
            {children}
        </UserContext.Provider>
    )
}

// disabled ete user.data is empty
// const data = useContext(UserConttext)
// <input value={data.firstName}