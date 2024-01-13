import * as yup from "yup";
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Debe ser de cuatro letras mínimo")
    .required("El nombre es requerida"),
  description: yup
    .string()
    .min(3, "Debe ser de cuatro letras mínimo")
    .required("La descripcion es requerida"),
  price: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El precio es requerida"),
  idCategory: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El codigo de la catregoria es requerida"),
});
const defaultValues = {
  name: "",
  price: 0,
  idCategory: 0,
  description: "",
};
export { schema, defaultValues };
