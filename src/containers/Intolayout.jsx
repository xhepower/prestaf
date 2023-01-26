import Header from "../components/Header";

import Appcontext from "../context/AppContext";
import { useContext, useEffect } from "react";
import { useToken } from "../hooks/useToken";
export default function Intolayout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}
