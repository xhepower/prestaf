import { useEffect, useState } from "react";

function useToken() {
  const [token, setToken] = useState(null);
  const guardarToken = (eltoken) => {
    localStorage.setItem("superdupertoken", eltoken);
    setToken(obtenerToken);
  };
  const obtenerToken = () => {
    return localStorage.getItem("superdupertoken");
  };
  const removerToken = () => {
    localStorage.removeItem("superdupertoken");
    setToken(null);
  };
  useEffect(() => {
    setToken(obtenerToken());
  }, []);
  // alert(token);
  return { token, guardarToken, setToken, removerToken, obtenerToken };
}
export { useToken };
