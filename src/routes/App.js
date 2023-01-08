import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../containers/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
