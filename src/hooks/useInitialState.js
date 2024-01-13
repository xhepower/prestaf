import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";

//import { useToken } from "./useToken";
const useInitialState = () => {
  const { token, setToken, removerToken, guardarToken } = useToken();

  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [selectedUser, setSelectedUser] = useState(0);

  useEffect(() => {
    (async () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        setCurrentUser(decodedToken.sub);
        setCurrentRole(decodedToken.role);
      }
    })();
  }, [token]);
  return {
    currentUser,
    setCurrentUser,
    currentRole,
    setCurrentRole,
    selectedUser,
    setSelectedUser,
    token,
    setToken,
    guardarToken,
    removerToken,
    isLogged,
    setIsLogged,
  };
};

export default useInitialState;
