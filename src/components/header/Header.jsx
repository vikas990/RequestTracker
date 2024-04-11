import React, { useState } from "react";
import Logo from "../../images/SMT_Logo.jpeg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  let navigate = useNavigate();
  const [routeChange, setRouteChange] = useState("/");
  return (
    <div className="head">
      <div className="headingContainer">
        {isNonMobile ? (
          <>
            <img src={Logo} alt="Logo" className="headingContainer--logo" />
            <p className="headingContainer--heading">
              Sarswati Machine Tools PVT. LTD.
            </p>
          </>
        ) : (
          <p className="headingContainer--heading">SMT</p>
        )}
      </div>
      <div
        onClick={() => {
          if (routeChange === "/") {
            navigate("/add");
            setRouteChange("/add");
          } else {
            navigate("/");
            setRouteChange("/");
          }
        }}
        className="action"
      >
        {routeChange === "/" ? "Add Request" : "Home"}
      </div>
    </div>
  );
};

export default Header;
