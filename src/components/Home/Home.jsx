import { useContext } from "react";
import Homecontext from "../../context/HomeContext";
import { usePrestamos } from "../../hooks/usePrestamos";
import Appcontext from "../../context/AppContext";
import moment from "moment";
import Paginacion from "./Paginacion";
import Spinner from "../Spinner";
function Home() {
  const prestamos = usePrestamos();
  const datosPrestamos = prestamos.datos;
  const { currentUser, currentRole } = useContext(Appcontext);
  let vencidos = [];
  let porVencer = [];
  datosPrestamos.map((prestamo) => {
    if (prestamo.pagado == false) {
      if (currentRole == "admin") {
        if (moment(prestamo.vencimiento) <= moment()) {
          vencidos.push(prestamo);
        }
        if (
          moment(prestamo.vencimiento) > moment() &&
          moment(prestamo.vencimiento).diff(moment(), "days") <= 3
        ) {
          porVencer.push(prestamo);
        }
      } else {
        if (prestamo.Cliente.Rutum.idUser == currentUser) {
          if (moment(prestamo.vencimiento) <= moment()) {
            vencidos.push(prestamo);
          }
          if (
            moment(prestamo.vencimiento) > moment() &&
            moment(prestamo.vencimiento).diff(moment(), "days") <= 3
          ) {
            porVencer.push(prestamo);
          }
        }
      }
    }
  });

  return (
    <>
      <Paginacion
        prestamos={porVencer}
        pageLimit={5}
        titulo="Prestamos por vencer"
      ></Paginacion>
      <Paginacion
        prestamos={vencidos}
        pageLimit={5}
        titulo="Prestamos vencidos"
      ></Paginacion>
    </>
  );
}

export default Home;
