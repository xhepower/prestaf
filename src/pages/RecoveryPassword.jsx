import React, { useState, useRef, useEffect } from "react";
// import "../styles/Login.css";
import { useRecoveryPassword } from "../hooks/useRecoveryPassword";
import Elform from "../forms/RecoveryPassword";
import Spinner from "../components/Spinner";
import "../styles/Form.scss";
function RecoveryPassword() {
  const { handleSubmit, save, isLoading, errors, register } =
    useRecoveryPassword();
  return (
    <>
      <Elform></Elform>
    </>
  );
}

export default RecoveryPassword;
