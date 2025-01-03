import React from "react";
import logoZanek from "/assets/images/logo-zanek.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <h1 className="m-0">
        <img className="d-block" src={logoZanek} alt="Logo da loja Meteora" />
      </h1>
    </a>
  );
};

export default Logo;
