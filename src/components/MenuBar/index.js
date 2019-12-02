import React from "react";

import "./styles.scss";

const MenuBar = () => (
  <div className="menu-bar">
    <div className="left-items">
      <span className="menu-item">PRODUCTS</span>
      <span className="menu-item">SOLUTIONS</span>
      <span className="menu-item">SUPPORT</span>
      <span className="menu-item">COMPANY</span>
    </div>
    <img
      className="logo"
      alt="img"
      src={require("../../assets/imgs/Asset 6.svg")}
    />
    <div className="right-items">
      <i className="menu-icon fa fa-user" />
      <i className="menu-icon fa fa-search"></i>
      <i className="menu-icon fa fa-globe"></i>
    </div>
  </div>
);

export default MenuBar;
