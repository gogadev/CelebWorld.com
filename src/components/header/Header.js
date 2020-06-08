import React from "react";

import LightSpeed from "react-reveal/LightSpeed";

import headerImg from "../../assets/diva.jpg";
import icon from "../../assets/icon.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">CelebWorld.com</h1>
      <img src={icon} alt="" className="icon" />
      <LightSpeed right>
        {" "}
        <img className="header-img" src={headerImg} alt="" />
      </LightSpeed>
    </header>
  );
};

export default Header;
