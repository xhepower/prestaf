import * as yup from "yup";
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Debe ser de cuatro letras mínimo")
    .required("El nombre es requerida"),
  description: yup
    .string()
    .min(3, "Debe ser de cuatro letras mínimo")
    .required("El telefono es requerida"),
});
const defaultValues = {
  name: "",
  description: "",
};
export { schema, defaultValues };
