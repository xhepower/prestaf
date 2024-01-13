import * as yup from "yup";
// id: {
//   allowNull: false,
//   autoIncrement: true,
//   primaryKey: true,
//   type: Sequelize.DataTypes.INTEGER,
// },
// clientId: {
//   allowNull: true,
//   type: Sequelize.DataTypes.INTEGER,
// },
// status: {
//   allowNull: true,
//   type: Sequelize.DataTypes.STRING,
//   defaultValue: 'cocinando',
// },
// total: {
//   allowNull: false,
//   type: Sequelize.DataTypes.DECIMAL,
//   defaultValue: 0,
// },

// orderId: orderId.required(),
// 	productId: productId.required(),
// 	quantity: quantity.required(),
const schema = yup.object().shape({
  clientId: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El precio es requerida"),
  // items: yup.array(
  //   Object({
  //     orderId: yup
  //       .number()
  //       .min(1, "debe ser un numero positivo")
  //       .required("El precio es requerida"),
  //     productId: yup
  //       .number()
  //       .min(1, "debe ser un numero positivo")
  //       .required("El precio es requerida"),
  //     quantity: yup
  //       .number()
  //       .min(1, "debe ser un numero positivo")
  //       .required("El precio es requerida"),
  //   })
  // ),
});
const defaultValues = {
  clientId: 3,
  //total: 0,
  // items: [],
};
export { schema, defaultValues };
