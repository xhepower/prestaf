import { useJwt } from "react-jwt";
import { useUsers } from "../hooks/useUsers";
import { useEffect, useRef, useState } from "react";
import Search from "../components/Search";
import Paginacion from "../components/Paginacion";
import Lista from "../components/Lista";
function Users() {
  const {
    datos,
    datosRender,
    setDatosRender,
    currentData,
    setCurrentData,
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
        <Search
          datos={datos}
          setDatosRender={setDatosRender}
          opciones={["email", "role"]}
        ></Search>
        <Paginacion
          datosRender={datosRender
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()}
          setCurrentData={setCurrentData}
          pageLimit={5}
          pageNeighbours={2}
        ></Paginacion>
        <Lista currentData={currentData} eliminar={eliminar}></Lista>
      </div>
    </div>
  );
}

export default Users;
