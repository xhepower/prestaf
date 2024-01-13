import authService from "../services/auth.service";
import { useState } from "react";
//import Appcontext from "../context/AppContext";
import { useToken } from "../hooks/useToken";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, defaultValues } from "../schemas/yup/Login.yup";
function useLogin() {
  const { guardarToken } = useToken();
  const [isLoading, setIsLoading] = useState(false);
  //   const schema = yup.object().shape({
  //     email: yup
  //       .string()
  //       .email("formato invalido de email")
  //       .required("El email es obligatorio"),
  //     password: yup
  //       .string()
  //       .min(4, "El password debe ser de cuatro letras mínimo")
  //       .required("La contraseña es requerida"),
  //   });
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const save = async (data) => {
    setIsLoading(true);
    clearErrors();
    try {
      const rta = await authService.login(data);
      const token = rta.data.token;
      guardarToken(token);
      window.location.href = "/";
      return rta;
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  return {
    save,
    guardarToken,
    isLoading,
    setIsLoading,
    errors,
    handleSubmit,
    register,
  };
}
export { useLogin };
