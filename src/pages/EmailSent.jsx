import React from "react";

function EmailSent() {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="login">
      <div className="login-container login-form userform form">
        <h1 className="label"> "El email ha sido enviado</h1>
        <button className="primary-button login-button" onClick={handleClick}>
          Regresar al home
        </button>
      </div>
    </div>
  );
}

export default EmailSent;
