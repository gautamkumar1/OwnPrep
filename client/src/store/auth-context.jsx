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
  let isLoggedIn = !!token;
  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  // function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  // lets takle the logout
  const logoutUser = () => {
    setToken(null);
    return localStorage.removeItem("token");
  };
  return (
    <authContext.Provider
      value={{ storeTokenInLocalStorage, logoutUser, isLoggedIn, user }}
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