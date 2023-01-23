import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useToken } from "./useToken";
const useInitialState = () => {
  const { obtenerToken } = useToken();
  const { decodedToken } = useJwt(obtenerToken());
  const [currentUser, setCurrentUser] = useState(0);
  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedCliente, setSelectedCliente] = useState(0);
  const [selectedRuta, setSelectedRuta] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    (async () => {
      setCurrentUser(await (await decodedToken).sub);
    })();
  }, []);
  return {
    currentUser,
    setCurrentUser,
    selectedUser,
    setSelectedUser,
    selectedCliente,
    setSelectedCliente,
    selectedRuta,
    setSelectedRuta,
    openModal,
    setOpenModal,
  };
};

export default useInitialState;
