import React from "react";

function PasswordChanged() {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1> "La contraseña ha sido cambiada</h1>
        <button onClick={handleClick}>Regresar al home</button>
      </div>
    </div>
  );
}

export default PasswordChanged;
