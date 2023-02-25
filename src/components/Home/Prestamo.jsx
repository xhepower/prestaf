import "../../styles/TablePrestamos.scss";
function Prestamo(props) {
  const { prestamos } = props;
  return (
    <div className="input">
      <table className="tablaprestamo">
        <thead className="tabla-encabezado">
          <tr className="tabla-fila">
            <th>Id</th>
            <th>Cliente</th>
            <th>Vencimiento</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo) => {
            return (
              <tr key={`vencido${prestamo.id}`} className="tabla-fila">
                <td>{prestamo.id}</td>
                <td>{prestamo.Cliente.nombre}</td>
                <td>{prestamo.vencimiento}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Prestamo;
