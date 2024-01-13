import { useState, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authService from "../services/auth.service";
function useChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup.object().shape({
    password1: yup
      .string()
      .min(4, "Las contraseñas no pueden ser menores a 4 caracteres")
      .required("El email es obligatorio"),
    password2: yup
      .string()
      .min(4, "Las contraseñas no pueden ser menores a 4 caracteres")
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
    const { password1, password2 } = data;

    try {
      if (password1 == password2) {
        let elToken = new URLSearchParams(document.location.search).get(
          "token"
        );
        const adata = {
          newPassword: password1,
          token: elToken,
        };
        const rta = await authService.changePassword(adata);
        window.location.href = "/password-recovery";
      } else {
        setIsLoading(false);
        setError("coincidencia", {
          type: "custom",
          message: "No coinciden las contraseñas",
        });
      }
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
}

export default useChangePassword;
