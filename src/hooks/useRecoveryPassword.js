import { useState, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authService from "../services/auth.service";
function useRecoveryPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("formato invalido de email")
      .required("El email es obligatorio"),
  });
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const save = async (data) => {
    setIsLoading(true);
    clearErrors();
    try {
      const rta = await authService.recoveryPassword(data);
      setIsLoading(false);
      window.location.href = "/email-sent";
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  return {
    save,
    isLoading,
    setIsLoading,
    errors,
    handleSubmit,
    register,
  };
  //   const handleLogin = async (data) => {
  //     const datos = { errors: null };
  //     setIsLoading(true);
  //     try {
  // const rta = await authService.recoveryPassword(data);
  // setIsLoading(false);
  // window.location.href = "/email-sent";
  //     } catch (error) {
  //       datos.errors = error.response.status;
  //       setIsLoading(false);
  //     }
  //     return datos;
  //   };
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(form.current);
  //     const data = {
  //       email: formData.get("email"),
  //     };

  //     const rta = await handleLogin(data);
  //     setErrors(rta.errors);
  //   };
}

export { useRecoveryPassword };
