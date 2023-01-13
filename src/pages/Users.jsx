import { useJwt } from "react-jwt";
import { useUsers } from "../hooks/useUsers";
import { useEffect, useRef, useState } from "react";
import Search from "../components/Search";

function Users() {
  const {
    datos,
    datosRender,
    setDatosRender,
    eliminar,
    guardar,
    dato,
    actualizar,
  } = useUsers();

  const save = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    };

    const rta = await guardar(data);
  };
  const form = useRef(null);

  return (
    <div className="Login">
      <div className="Login-container">
        <form className="form userform" ref={form}>
          <p className="form-titulo">Crear nuevo usuario</p>
          <label htmlFor="email" className="label">
            Correo eléctronico
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese aquí su correo electrónico"
            className="input input-email"
            required
          />
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            required
          />
          <label htmlFor="password" className="label">
            Rol
          </label>
          <select
            name="role"
            defaultValue="user"
            className="input input-password"
          >
            <option value="user">Cobrador</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>

          <input
            className="primary-button login-button"
            value="Guardar"
            type="submit"
            onClick={save}
          ></input>
        </form>
      </div>
      <div className="lista">
        <p className="lista-titulo">Lista de usuarios</p>
        <Search datos={datos} setDatosRender={setDatosRender}></Search>
        <div className="lista-container">
          {datosRender.map((item) => {
            return (
              <div className="lista-item" key={`item${item.id}`}>
                <div className="lista-datos">
                  <p className="datos-linea">
                    <b>Id: </b>
                    {item.id}
                  </p>
                  <p className="datos-linea">
                    <b>Email: </b>
                    {item.email}
                  </p>
                  <p className="datos-linea">
                    <b>Rol: </b>
                    {item.role}
                  </p>
                </div>
                <div className="lista-actions">
                  <button
                    className="btn-eliminar"
                    onClick={() => {
                      eliminar(item.id);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
