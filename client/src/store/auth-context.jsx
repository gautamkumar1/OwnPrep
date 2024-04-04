/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const authContext = createContext();
// create the auth context provider

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [service, setService] = useState("");
  const authorizationToken = `Bearer ${token}`;
  
  let isLoggedIn = !!token;
  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  
// JWT AUTHENTICATION - to get the currentlt loggedIn user data
const userAuthentication = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/user", {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      setUser(responseData.userData);
    } else {
      setUser("");
      console.error("Error fetching user data");
    }
  } catch (error) {
    console.log(error);
  }
};

const getServiceData = async () =>{
  try {
    const response = await fetch("http://localhost:5000/api/data/service",{
      method: "GET",
    });
    if(response.ok){
      const services = await response.json();
     setService(services.data);
    }
    // console.log("Service",response);
  } catch (error) {
    console.log("Error fetching service data from frontend", error);
  }
}
useEffect (() => {
  userAuthentication()
  getServiceData();
},[])
 
  // lets takle the logout
  const logoutUser = () => {
    setToken(null);
    return localStorage.removeItem("token");
  };
  return (
    <authContext.Provider
      value={{ storeTokenInLocalStorage, logoutUser, isLoggedIn,user,service,authorizationToken}}
    >
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