import React from "react";
import { Link } from "react-router-dom";
//import { slide as Menu } from "react-burger-menu";
import "../styles/NavApp.scss";
var Menu = require("react-burger-menu").bubble;
function navApp() {
  function showSettings(event) {
    event.preventDefault();
  }
  return (
    // <nav>
    //   <ul className="ul-nav">
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/users">Usuarios</a>
    //     </li>
    //     <li>
    //       <a href="/units">Unidades</a>
    //     </li>
    //     <li>
    //       <a href="/clients">Clientes</a>
    //     </li>
    //     <li>
    //       <a href="/categories">Clientes</a>
    //     </li>
    //   </ul>
    // </nav>
    <Menu position="right" noOverlay>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="orders" className="menu-item" href="/orders">
        Ordenes
      </a>
      <a id="products" className="menu-item" href="/products">
        Productos
      </a>
      <a id="users" className="menu-item" href="/users">
        Users
      </a>
      <a id="units" className="menu-item" href="/units">
        Unidades
      </a>
      <a id="clients" className="menu-item" href="/clients">
        Clients
      </a>
      <a id="categories" className="menu-item" href="/categories">
        Categorias
      </a>
      <a id="ingredients" className="menu-item" href="/ingredients">
        Ingredientes
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
}

export default navApp;
