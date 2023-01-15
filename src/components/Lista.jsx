function Lista(props) {
  const { currentData, eliminar } = props;
  return (
    <div className="lista-container">
      {currentData.map((item) => {
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
  );
}

export default Lista;
