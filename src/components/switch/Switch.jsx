import React from "react";
import { updateLang } from "../languages";
import { useState } from "react";
import "./switch.css";

const Switch = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const onChangeLang = () => {
    let newLang = lang;

    if (lang == "es") {
      newLang = "en";
    } else {
      newLang = "es";
    }

    setLang(newLang);
    updateLang(newLang);
  };

  return (
    <div className="switch_container">
      <span className="es">ES</span>
      <input type="checkbox" className="check" onClick={onChangeLang} />
      <span className="en">EN</span>
    </div>
  );
};

export default Switch;
