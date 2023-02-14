import React from "react";
import airbnblogo from "../../assets/images/airbnb-logo.png";
import navbarstyle from "./navbarstyle.module.css";

console.log(navbarstyle);

export default function Navbar() {
  return (
    <nav className={navbarstyle.nav}>
      <img src={airbnblogo} className={navbarstyle.logo} />
    </nav>
  );
}
