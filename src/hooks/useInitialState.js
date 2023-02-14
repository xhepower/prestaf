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
  const [selectedRuta, setSelectedRuta] = useState(0);
  const [selectedGasto, setSelectedGasto] = useState(0);
  const [selectedCliente, setSelectedCliente] = useState(0);
  const [selectedPrestamo, setSelectedPrestamo] = useState(0);
  const [selectedPago, setSelectedPago] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

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
    selectedCliente,
    setSelectedCliente,
    selectedRuta,
    setSelectedRuta,
    selectedGasto,
    setSelectedGasto,
    selectedPrestamo,
    setSelectedPrestamo,
    selectedPago,
    setSelectedPago,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    token,
    setToken,
    guardarToken,
    removerToken,
    isLogged,
    setIsLogged,
  };
};

export default useInitialState;
