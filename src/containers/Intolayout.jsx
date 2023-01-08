import Header from "../components/Header";
export default function Intolayout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}
