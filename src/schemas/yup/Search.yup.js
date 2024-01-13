import * as yup from "yup";
const schema = yup.object().shape({
  searchText: yup.string(),
});
const defaultValues = {
  searchText: "",
};
export { schema, defaultValues };
