// import React from "react";
// import { userecoveryPassword } from "../hooks/useRecoveryPassword";
// import { useToken } from "../hooks/useToken";
// import Spinner from "../components/Spinner";
// function RecoveryPassword() {
//   return (
//     <form
//       className="recoveryPassword-form userform form"
//       noValidate
//       onSubmit={handleSubmit(save)}
//     >
//       {isLoading && <Spinner></Spinner>}
//       <p className="errors">{errors.server?.message}</p>
//       <label htmlFor="email" className="label">
//         Correo eléctronico
//       </label>
//       <input
//         type="email"
//         name="email"
//         placeholder="Ingrese aquí su correo electrónico"
//         className="input input-email"
//         {...register("email")}
//       />
//       <p className="errors">{errors.email?.message}</p>
//       <input
//         className="primary-button recoveryPassword-button"
//         value="Entrar"
//         type="submit"
//         // onClick={}
//       ></input>
//     </form>
//   );
// }

// export default RecoveryPassword;
import React from "react";
import { useRecoveryPassword } from "../hooks/useRecoveryPassword";
import { useToken } from "../hooks/useToken";
import Spinner from "../components/Spinner";
import "../styles/Form.scss";
function RecoveryPassword() {
  const { handleSubmit, save, isLoading, errors, register } =
    useRecoveryPassword();
  const { obtenerToken } = useToken();
  const tokencito = obtenerToken();

  // const history = useHistory();
  if (tokencito) {
    window.location.href = "/";
  }
  return (
    <form
      className="recoveryPassword-form userform form"
      noValidate
      onSubmit={handleSubmit(save)}
    >
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="email" className="label">
        Correo eléctronico
      </label>
      <input
        type="email"
        name="email"
        placeholder="Ingrese aquí su correo electrónico"
        className="input input-email"
        {...register("email")}
      />
      <p className="errors">{errors.email?.message}</p>
      <input
        className="primary-button recoveryPassword-button"
        value="Entrar"
        type="submit"
        // onClick={}
      ></input>
    </form>
  );
}

export default RecoveryPassword;
