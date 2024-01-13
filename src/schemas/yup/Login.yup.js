import * as yup from "yup";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("formato invalido de email")
    .required("El email es obligatorio"),
  password: yup
    .string()
    .min(4, "El password debe ser de cuatro letras mínimo")
    .required("La contraseña es requerida"),
});
const defaultValues = {
  email: "",
  password: "",
};
export { schema, defaultValues };
