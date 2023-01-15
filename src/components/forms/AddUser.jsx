import { useUsers } from "../../hooks/useUsers";
import { useRef } from "react";
function AddUser(props) {
  const { guardar } = useUsers();
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
      <select name="role" defaultValue="user" className="input input-password">
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
  );
}

export default AddUser;
