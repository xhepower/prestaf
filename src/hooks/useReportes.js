import { useState, useEffect } from "react";

import prestamoService from "../services/prestamo.service";
import gastoService from "../services/gasto.service";
import pagoService from "../services/pago.service";

import { usePrestamos } from "./usePrestamos";
import { usePagos } from "./usePagos";
import { useGastos } from "../hooks/useGastos";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";

function useReportes() {
  const [isLoading, setIsLoading] = useState(false);
  const [prestamos, setPrestamos] = useState([]);
  const [pagos, setPagos] = useState([]);
  const [gastos, setGastos] = useState([]);
  const [sPrestamos, setsPrestamos] = useState([]);
  const [sPagos, setsPagos] = useState([]);
  const [sGastos, setsGastos] = useState([]);
  const schema = yup.object().shape({
    fecha1: yup
      .date("El formato de fecha no es valido")
      .required("La fecha es requerida"),
    fecha2: yup
      .date("El formato de fecha no es valido")
      .required("La fecha es requerida"),
  });
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const entreFechas = (fecha, desde, hasta) => {
    if (fecha >= desde && fecha <= hasta) {
      return true;
    } else {
      return false;
    }
  };
  const retrieve = async (data, e) => {
    const { fecha1, fecha2 } = data;
    setIsLoading(true);
    try {
      e.preventDefault();
      const datosPrestamos = (await prestamoService.getAll()).data;
      const datosPagos = (await pagoService.getAll()).data;
      const datosGastos = (await gastoService.getAll()).data;
      let sumaPrestamo = 0;
      let sumaGasto = 0;
      let sumaPago = 0;
      setPrestamos(
        datosPrestamos.filter((item) => {
          if (entreFechas(moment(item.emitido).toDate(), fecha1, fecha2)) {
            setsPrestamos(sPrestamos + item.monto);
            return true;
          } else {
            return false;
          }
        })
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };

  return {
    prestamos,
    pagos,
    gastos,
    register,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    isLoading,
    retrieve,
  };
}

export default useReportes;
