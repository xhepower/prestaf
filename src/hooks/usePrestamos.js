import { useEffect, useState, useContext } from "react";
import prestamoService from "../services/prestamo.service";
import AppContext from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";

function usePrestamos() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    setOpenModal,
    setOpenModal2,
    selectedCliente,
    setSelectedCliente,
    currentUser,
  } = useContext(AppContext);
  function contarDomingos(desde, hasta) {
    var contador = 0;
    var fecha = moment(desde);

    while (fecha.isSameOrBefore(hasta)) {
      if (fecha.day() === 0) {
        contador++;
      }
      fecha.add(1, "day");
    }

    return contador;
  }
  const schema = yup.object().shape({
    idCliente: yup.number().integer().min(1),
    monto: yup.number().min(0).required(),
    tasa: yup.number().min(0).max(100).required(),
    vencimiento: yup.date().required(),
    emitido: yup.date().required(),
    saldo: yup.number().min(0, "nO puede ser cero").required(),
  });
  const onIdClienteChange = (e) => {
    setSelectedCliente(parseInt(e.target.value));
  };
  const calcularSaldo = (e) => {
    const monto = parseFloat(getValues("monto"));
    const tasa = parseFloat(getValues("tasa") / 3000);
    setSliderValue(parseFloat(getValues("tasa")));
    const emitido = moment(getValues("emitido"));
    const vencimiento = moment(getValues("vencimiento"));
    //console.log(contarDomingos(emitido, vencimiento));
    const dias = vencimiento.diff(emitido, "days");
    const domingos = contarDomingos(emitido, vencimiento);
    console.log(dias, domingos);
    const saldo = monto + monto * tasa * (dias - domingos);
    setValue("saldo", parseFloat(saldo));
  };

  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    setError,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      monto: 0,
      tasa: 0,
      vencimiento: new Date(),
    },
    resolver: yupResolver(schema),
  });

  const save = async (data) => {
    setIsLoading(true);
    try {
      data.idUser = currentUser;
      const rta = await guardar(data);
      reset();
      actualizarDatos();
      setSelectedCliente(0);
      setOpenModal2(false);
      setOpenModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  const [sliderValue, setSliderValue] = useState(0);
  const actualizarDatos = () => {
    (async () => {
      setIsLoading(true);
      try {
        setDatos(
          (await prestamoService.getAll()).data
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()
        );
        setDatosRender(
          (await prestamoService.getAll()).data
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("server", error);
      }
    })();
  };
  useEffect(() => {
    actualizarDatos();
  }, []);
  const dato = async (id) => {
    return await prestamoService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el prestamo #${id}?`)) {
      (async () => {
        prestamoService.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el prestamo?")) {
      (async () => {
        prestamoService.save(data);
        setDatos((await prestamoService.getAll()).data);
        // window.location.href = window.location.href;
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,
    setDatosRender,
    datosRender,
    currentData,
    setCurrentData,
    dato,
    actualizar,
    eliminar,
    guardar,
    actualizarDatos,
    selectedCliente,
    handleSubmit,
    save,
    onIdClienteChange,
    register,
    setOpenModal2,
    errors,
    calcularSaldo,
    sliderValue,
    isLoading,
  };
}

export { usePrestamos };
