import { createContext, useState } from 'react';

export const UserFormContext = createContext();

export const UserFormProvider = ({ children }) => {
    const [userFormData, setUserFormData] = useState({});
    
    return (
        <UserFormContext.Provider value={{userFormData, setUserFormData}}>
            {children}
        </UserFormContext.Provider> 
    )
}