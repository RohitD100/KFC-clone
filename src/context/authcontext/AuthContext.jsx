import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider =({children})=>{
    const [user, setUser]  = useState(false);

    const Signout = ()=>{
        setUser(false)
        
    }
    const value = {user, setUser, Signout};
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}