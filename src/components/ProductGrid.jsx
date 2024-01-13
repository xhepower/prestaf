import React, { useState } from "react";
import AppService from "../services/App.service";
import "../styles/Grid.scss";
import { useEffect } from "react";
function ProductGrid({ id }) {
  const service = new AppService("detailproducts");
  const [datos, setdatos] = useState([]);
  const borrarItem = async (id) => {
    if (window.confirm(`¿Dese eliminar el ingrediente con registro #${id}`)) {
      await service.delete(id);
      actualizarGrid();
    }
  };
  const actualizarGrid = () => {
    (async () => {
      setdatos((await service.getAll({ fk: "productId", fkIndex: id })).data);
    })();
  };
  useEffect(() => {
    actualizarGrid();
  }, [id]);

  return (
    <table className="table-details">
      <tr className="table-row ">
        <th className="grid-item table-header">Ingrediente </th>
        <th className="grid-item table-header">Cantidad</th>
        <th className="grid-item table-header">Borrar</th>
      </tr>
      {datos
        ? datos.map((item) => {
            return (
              <tr className="table-row">
                <td className="grid-item">{item.Ingredient.name} </td>
                <td className="grid-item">{item.quantity}</td>
                <td className="grid-item">
                  <button
                    className="btn-secondary bt-delete.item"
                    onClick={() => {
                      borrarItem(item.id);
                    }}
                  >
                    Borrar item
                  </button>
                </td>
              </tr>
            );
          })
        : null}
    </table>
  );
}

export default ProductGrid;
