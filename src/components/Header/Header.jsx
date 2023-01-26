import React, { useState } from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <h2>Logo</h2>
      <Navbar open={open} setOpen={setOpen} />
      <MenuButton open={open} setOpen={setOpen} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
