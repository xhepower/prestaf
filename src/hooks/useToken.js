import { useEffect, useState } from "react";
import { set } from "react-hook-form";

function useToken() {
  const [token, setToken] = useState(null);
  const guardarToken = (eltoken) => {
    localStorage.setItem("superdupertoken", eltoken);
    setToken(localStorage.getItem("superdupertoken"));
  };
  const removerToken = () => {
    localStorage.removeItem("superdupertoken");
    setToken(null);
  };
  useEffect(() => {
    setToken(localStorage.getItem("superdupertoken"));
  }, []);
  // alert(token);
  return { token, guardarToken, setToken, removerToken };
}
export { useToken };
