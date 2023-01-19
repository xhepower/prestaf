import { useClientes } from "../../hooks/useClientes";
import { useRef } from "react";
import { useUsers } from "../../hooks/useUsers";

function AddCliente(props) {
  const { guardar, decodedToken } = useClientes();
  const save = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      nombre: formData.get("nombre"),
      identidad: formData.get("identidad"),
      direccion: formData.get("direccion"),
      idUser: decodedToken.sub,
    };

    const rta = await guardar(data);
  };
  const form = useRef(null);
  return (
    <form className="form userform" ref={form}>
      <p className="form-titulo">Crear nuevo cliente</p>
      <label htmlFor="nombre" className="label">
        Nombre
      </label>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese aquí el nombre del cliente"
        className="input input-email"
        required
      />
      <label htmlFor="identidad" className="label">
        Identidad
      </label>
      <input
        type="text"
        name="identidad"
        placeholder="Ingrese aquí la identidad del cliente"
        className="input input-email"
        required
      />
      <label htmlFor="direccion" className="label">
        Direccion
      </label>
      <textarea
        id="direccion"
        name="direccion"
        rows="4"
        cols="50"
        className="input input-email"
      ></textarea>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={save}
      ></input>
    </form>
  );
}

export default AddCliente;
