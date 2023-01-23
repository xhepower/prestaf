import UserPage from "../components/Users";
import UserContext from "../context/UserContext";
import { useUsers } from "../hooks/useUsers";
function Users() {
  const initial = useUsers();
  return (
    <UserContext.Provider value={initial}>
      <div className="Login">
        <UserPage></UserPage>
      </div>
    </UserContext.Provider>
  );
}

export default Users;
