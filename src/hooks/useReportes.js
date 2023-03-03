import { useState, useEffect } from "react";

import prestamoService from "../services/prestamo.service";
import gastoService from "../services/gasto.service";
import pagoService from "../services/pago.service";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";

function useReportes() {
  const [isLoading, setIsLoading] = useState(false);
  const [prestamos, setPrestamos] = useState([]);
  const [gastos, setGastos] = useState([]);
  const [pagos, setPagos] = useState([]);
  const [sPrestamos, setsPrestamos] = useState([]);
  const [sPagos, setsPagos] = useState([]);
  const [sGastos, setsGastos] = useState([]);
  const [prestamosVisible, setPrestamosVisible] = useState(false);
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
  const retrieve = async (data, e) => {
    const { fecha1, fecha2 } = data;
    setIsLoading(true);
    try {
      e.preventDefault();
      //Prestamos
      const datosPrestamos = (await prestamoService.getAll()).data.filter(
        (item) => {
          return (
            moment(item.emitido).toDate() >= moment(fecha1).toDate() &&
            moment(item.emitido).toDate() <= moment(fecha2).toDate()
          );
        }
      );
      setPrestamos(await datosPrestamos);
      setsPrestamos(
        (await datosPrestamos).reduce(
          (accumulator, currentValue) =>
            accumulator + parseFloat(currentValue.monto),
          0
        )
      );
      //Pagos
      const datosPagos = (await pagoService.getAll()).data.filter((item) => {
        return (
          moment(item.emitido).toDate() >= moment(fecha1).toDate() &&
          moment(item.emitido).toDate() <= moment(fecha2).toDate()
        );
      });
      setPagos(await datosPagos);
      setsPagos(
        (await datosPagos).reduce(
          (accumulator, currentValue) =>
            accumulator + parseFloat(currentValue.monto),
          0
        )
      );
      //Gastos
      const datosGastos = (await gastoService.getAll()).data.filter((item) => {
        return (
          moment(item.emitido).toDate() >= moment(fecha1).toDate() &&
          moment(item.emitido).toDate() <= moment(fecha2).toDate()
        );
      });
      setGastos(await datosGastos);
      setsGastos(
        (await datosGastos).reduce(
          (accumulator, currentValue) =>
            accumulator + parseFloat(currentValue.monto),
          0
        )
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };

  return {
    prestamos,
    sPrestamos,
    pagos,
    gastos,
    sGastos,
    sPagos,
    register,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    isLoading,
    retrieve,
    prestamosVisible,
    setPrestamosVisible,
  };
}

export default useReportes;
