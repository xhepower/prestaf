import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import IntoLayout from "../containers/Intolayout";
import Login from "../pages/Login";
import EmailSent from "../pages/EmailSent";
import Home from "../pages/Home";
import RecoveryPassword from "../pages/RecoveryPassword";
import ChangePassword from "../pages/ChangePassword";
import PasswordChanged from "../pages/PasswordChanged";
import Users from "../pages/Users";

import Appcontext from "../context/AppContext";
import UserContext from "../context/UserContext";

import useInitialState from "../hooks/useInitialState";
import { useUsers } from "../hooks/useUsers";
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
          <Route exact path="/login" element={<Login />} />
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
