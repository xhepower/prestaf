import "../styles/Layout.scss";
import Appcontext from "../context/AppContext";
import { useContext, useEffect } from "react";
import { useToken } from "../hooks/useToken";
function LoginLayout({ children }) {
  const { obtenerToken } = useToken();

  if (obtenerToken()) {
    window.location.href = "/";
  }
  return <div className="main">{children}</div>;
}

export default LoginLayout;
