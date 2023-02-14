import HomePage from "../components/Home";
import HomeContext from "../context/HomeContext";
import { useHome } from "../hooks/useHome";
function Home() {
  const initial = useHome();
  return (
    <HomeContext.Provider value={initial}>
      <div className="Login">
        <HomePage></HomePage>
      </div>
    </HomeContext.Provider>
  );
}

export default Home;
