//librerias
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layouts
import LoginLayout from "../containers/LoginLayout";
import AppLayout from "../containers/AppLayout";
import Layout from "../containers/Layout";
//Contextos
import Appcontext from "../context/AppContext";
//compoonentes
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import EmailSent from "../pages/EmailSent";
import ChangePassword from "../pages/ChangePassword";
import Users from "../pages/Users";
import Units from "../pages/Units";
import Ingredients from "../pages/Ingredients";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Categories from "../pages/Categories";
import PasswordChanged from "../pages/PasswordChanged";
//hooks
import useInitialState from "../hooks/useInitialState";

//schemas
import {
  schema as userSchema,
  defaultValues as userDefault,
} from "../schemas/yup/User.yup";
import {
  schema as clientSchema,
  defaultValues as clientDefault,
} from "../schemas/yup/Client.yup";
import {
  schema as unitSchema,
  defaultValues as unitDefault,
} from "../schemas/yup/Unit.yup";
import {
  schema as categorySchema,
  defaultValues as categoryDefault,
} from "../schemas/yup/Category.yup";
import {
  schema as ingredientSchema,
  defaultValues as ingredientDefault,
} from "../schemas/yup/Ingredient.yup";
import {
  schema as productSchema,
  defaultValues as productDefault,
} from "../schemas/yup/Product.yup";
import {
  schema as orderSchema,
  defaultValues as orderDefault,
} from "../schemas/yup/Order.yup";
import IntoContext from "../context/IntoContext";
import Clients from "../pages/Clients";
function App() {
  const initialState = useInitialState();
  return (
    <Appcontext.Provider value={initialState}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <LoginLayout>
                  <Login></Login>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/recovery-password"
              element={
                <LoginLayout>
                  <RecoveryPassword></RecoveryPassword>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/email-sent"
              element={
                <LoginLayout>
                  <EmailSent></EmailSent>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/recovery"
              element={
                <LoginLayout>
                  <ChangePassword></ChangePassword>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/password-recovery"
              element={
                <LoginLayout>
                  <PasswordChanged></PasswordChanged>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/users"
              element={
                <AppLayout
                  tabla="users"
                  defaultValues={userDefault}
                  schema={userSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{ email: "email", role: "rol" }}
                  itemFields={{ email: "Email", role: "Rol", id: "Id" }}
                >
                  <Users></Users>
                </AppLayout>
              }
            />
            <Route
              exact
              path="/units"
              element={
                <AppLayout
                  tabla="units"
                  defaultValues={unitDefault}
                  schema={unitSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{ name: "Nombre" }}
                  itemFields={{ name: "Nombre Unidad", id: "Id" }}
                >
                  <Units></Units>
                </AppLayout>
              }
            />
            <Route
              exact
              path="/clients"
              element={
                <AppLayout
                  tabla="clients"
                  defaultValues={clientDefault}
                  schema={clientSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{ name: "Nombre", phone: "Telefono" }}
                  itemFields={{
                    name: "Nombre cliente",
                    id: "Id",
                    phone: "Telefono",
                  }}
                >
                  <Clients></Clients>
                </AppLayout>
              }
            />
            <Route
              exact
              path="/categories"
              element={
                <AppLayout
                  tabla="categories"
                  defaultValues={categoryDefault}
                  schema={categorySchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{ name: "Nombre", description: "Descripcion" }}
                  itemFields={{
                    name: "Nombre cliente",
                    id: "Id",
                    description: "Descripcion",
                  }}
                >
                  <Categories></Categories>
                </AppLayout>
              }
            />
            <Route
              exact
              path="/ingredients"
              element={
                <AppLayout
                  tabla="ingredients"
                  defaultValues={ingredientDefault}
                  schema={ingredientSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{
                    name: "Nombre",
                  }}
                  itemFields={{
                    name: "Nombre ingrediente",
                    id: "Id",
                    unitId: "Unidad",
                    price: "Precio",
                    stock: "Stock",
                    minimum: "Minimo",
                  }}
                >
                  <Ingredients></Ingredients>
                </AppLayout>
              }
            />
            <Route
              exact
              path="/products"
              element={
                <AppLayout
                  tabla="products"
                  defaultValues={productDefault}
                  schema={productSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{
                    name: "Nombre",
                  }}
                  itemFields={{
                    name: "Nombre ingrediente",
                    id: "Id",
                    description: "Descripcion",
                    price: "Precio",
                    idCategory: "Categoria Id",
                  }}
                >
                  <Products></Products>
                </AppLayout>
              }
            />
            <Route
              exact
              path="/orders"
              element={
                <AppLayout
                  tabla="orders"
                  defaultValues={orderDefault}
                  schema={orderSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchFields={{}}
                  itemFields={{
                    id: "Id",
                    clientId: "Id Cliente",
                    status: "Estado",
                    total: "total",
                  }}
                >
                  <Orders></Orders>
                </AppLayout>
              }
            />
            <Route exact path="/" element={<AppLayout></AppLayout>} />
            <Route exact path="*" element={"error"} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Appcontext.Provider>
  );
}

export default App;
