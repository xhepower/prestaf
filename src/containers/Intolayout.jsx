import Header from "../components/Header";
import useLogged from "../hooks/useLogged";
import { useUsers } from "../hooks/useUsers";
import Appcontext from "../context/AppContext";
import { useContext } from "react";
export default function Intolayout({ children }) {
  useLogged("/login");

  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}
