import { useEffect } from "react";
import { useAuth } from "../store/auth-context";
import { Navigate } from "react-router-dom";

function Logout(){
  const { logoutUser } = useAuth();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <Navigate to="/" />;
}

export default Logout;
