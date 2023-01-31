import Header from "../components/Header";

import Appcontext from "../context/AppContext";
import { useContext, useEffect } from "react";
import { useToken } from "../hooks/useToken";
export default function Intolayout({ children }) {
  const { obtenerToken } = useToken();
  if (!obtenerToken()) {
    window.location.href = "/login";
  }
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}
