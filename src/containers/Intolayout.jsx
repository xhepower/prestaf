import Header from "../components/Header";
import useLogged from "../hooks/useLogged";

export default function Intolayout({ children }) {
  useLogged("/login");
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}
