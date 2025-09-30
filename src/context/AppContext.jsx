import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext= createContext();

export const AppContextProvider=(props)=> {
    const navigate= useNavigate()
    const[user, setUser]= useState(null)
    const[isSeller, setIsSeller]= useState(false)

    const value={
        navigate, user, setUser, isSeller, setIsSeller, 
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}