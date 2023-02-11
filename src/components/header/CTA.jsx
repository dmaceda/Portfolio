import React from "react";
import CV from "../../assets/CV.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {" "}
        {t("cta.btn1")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        {t("cta.btn2")}
      </a>
    </div>
  );
};

export default CTA;
