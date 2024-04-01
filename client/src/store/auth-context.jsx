/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext, useContext } from "react";

export const authContext = createContext();
// create the auth context provider

export const AuthProvider = ({ children }) => {
  const [token,setToken] = useState(localStorage.getItem('token'));
  let isLoggedIn = !!token;
  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };
  // lets takle the logout
  const logoutUser = () => {
    setToken(null);
    return localStorage.removeItem("token");
  };
  return (
    <authContext.Provider value={{ storeTokenInLocalStorage,logoutUser,isLoggedIn}}>
      {children}
    </authContext.Provider>
  );
};
// create a custom hooks function
export const useAuth = () =>{
    const authContextValue = useContext(authContext);
    if(!authContextValue){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
}