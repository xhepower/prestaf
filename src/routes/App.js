import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IntoLayout from "../containers/Intolayout";

import Home from "../pages/Home";
import Users from "../pages/Users";
import Rutas from "../pages/Rutas";
import Gastos from "../pages/Gastos";
import Clientes from "../pages/Clientes";
import Prestamos from "../pages/Prestamos";
import Pagos from "../pages/Pagos";

import LoginLayout from "../containers/LoginLayout";
import Login from "../pages/Login";
import EmailSent from "../pages/EmailSent";
import RecoveryPassword from "../pages/RecoveryPassword";
import ChangePassword from "../pages/ChangePassword";
import PasswordChanged from "../pages/PasswordChanged";

import Appcontext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <Appcontext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <IntoLayout>
                <Home />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/users"
            element={
              <IntoLayout>
                <Users />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/rutas"
            element={
              <IntoLayout>
                <Rutas />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/gastos"
            element={
              <IntoLayout>
                <Gastos />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/clientes"
            element={
              <IntoLayout>
                <Clientes />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/prestamos"
            element={
              <IntoLayout>
                <Prestamos />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/pagos"
            element={
              <IntoLayout>
                <Pagos />
              </IntoLayout>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <LoginLayout>
                <Login></Login>
              </LoginLayout>
            }
          />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route exact path="/email-sent" element={<EmailSent />} />
          <Route exact path="/recovery" element={<ChangePassword />} />
          <Route
            exact
            path="/password-recovery"
            element={<PasswordChanged />}
          />
        </Routes>
      </BrowserRouter>
    </Appcontext.Provider>
  );
}

export default App;
