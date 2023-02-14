import { useState, useContext } from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import Appcontext from "../../context/AppContext";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  //const { currentUser } = useContext(Appcontext);

  return (
    <HeaderWrapper>
      <h2>CREDIRAPIDOS</h2>
      <Navbar open={open} setOpen={setOpen} />
      <MenuButton open={open} setOpen={setOpen} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
