import React from "react";
import "./portfolio.css";
import GAMES from "../../assets/GAMES-LAND.png";
import CRIPTO from "../../assets/cripto_m.png";
import TUSPACIO from "../../assets/tuspacio.png";
import LITEFLIX from "../../assets/liteflix.png";
import LOGIN from "../../assets/login.png";
import POKE from "../../assets/pokedex.png";
import { useTranslation } from "react-i18next";

import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiAngularSimple,
} from "react-icons/di";
import { SiRedux, SiTypescript, SiMaterialui } from "react-icons/si";

const Portfolio = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      image: GAMES,
      title: "Games-Land SPA",
      description: t("proyects.gamesland"),
      github: "https://github.com/dmaceda/Videogames",
      demo: "https://games-land.vercel.app/",
      lang: ["css", "js", "react", "redux"],
    },
    {
      id: 2,
      image: TUSPACIO,
      title: "TuSpacio Ecommerce",
      description: t("proyects.tuspacio"),
      github: "https://github.com/ENDERSON-MARIN/PG-TUSPACIO-FRONTEND",
      demo: "https://tuspacio.vercel.app/",
      lang: ["css", "js", "react", "redux", "mui"],
    },

    {
      id: 3,
      image: CRIPTO,
      title: "Criptomonedas",
      description: t("proyects.cripto"),
      github: "https://github.com/dmaceda/Criptomonedas",
      demo: "https://dmaceda.github.io/Criptomonedas/",
      lang: ["css", "js"],
    },
    // {
    //   id: 4,
    //   image: CLIMA,
    //   title: "Weather SPA",
    //   description:
    //     "La aplicación de pronóstico del tiempo es una SPA que nos entrega una tarjeta por cada ciudad que consultemos, con la informacion del clima en tiempo real, viento y temperatura. Clickeando sobre cada ciudad podemos acceder a información mas detallada",
    //   github: "https://github.com/dmaceda/Clima-App",
    //   demo: "https://dmaceda.github.io/Clima-App/",
    //   lang: ["css", "js"],
    // },
    // {
    //   id: 5,
    //   image: CALCULATOR,
    //   title: "Responsive Calculator",
    //   description:
    //     "Esta es una aplicación desarrollada con HTML, CSS & React, se trata de una calculadora interactiva que realiza las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división). Su estructura inicial fue creada con el comando npx create-react-app.                         ",
    //   github: "https://github.com/dmaceda/Calculator",
    //   demo: "https://dmaceda.github.io/Calculator/",
    // },

    // {
    //   id: 6,
    //   image: PORTFOLIO,
    //   title: "Responsive Portfolio",
    //   description:
    //     "Esta es una aplicación desarrollada con HTML, CSS & React JS. Se trata de mi Portfolio personal, donde podran encontrar mi información de contacto, mis conocimientos y objetivos.  Mis soft & tech skill actualizadas y podran visualizar  mis ultimos proyectos.",
    //   github: "https://github.com/dmaceda/Portfolio",
    //   demo: "https://dmaceda.github.io/Portfolio/",
    // },
    {
      id: 7,
      image: LITEFLIX,
      title: "Liteflix",
      description: t("proyects.lite"),
      github: "https://github.com/dmaceda/LiteFlix-Challenge",
      demo: "https://liteflix-three.vercel.app/",
      lang: ["css", "js", "react", "redux"],
    },
    {
      id: 8,
      image: POKE,
      title: "PokeDex",
      description: t("proyects.poke"),
      github: "https://github.com/dmaceda/defon-dex",
      demo: "https://defon-dex.vercel.app/",
      lang: ["css", "angular", "ts"],
    },

    {
      id: 9,
      image: LOGIN,
      title: "Login",
      description: t("proyects.login"),
      github: "https://github.com/dmaceda/react-test-assignment",
      demo: "https://react-test-assignment-dmaceda.vercel.app/",
      lang: ["css", "ts", "react"],
    },
  ];

  return (
    <section id="portfolio">
      <h5>{t("proyects.subtitle")}</h5>
      <h2>{t("proyects.title")}</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description, lang }) => {
          return (
            <div className="portfolio__items">
              <div key={id} className="portfolio__item-image">
                <img src={image} alt={title} width="100%" />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>

              {lang.map((lang) => {
                return (
                  <>
                    {lang === "css" ? <DiCss3 className="mokup" /> : null}
                    {lang === "js" ? <DiJavascript1 className="mokup" /> : null}
                    {lang === "react" ? <DiReact className="mokup" /> : null}
                    {lang === "redux" ? <SiRedux className="mok" /> : null}
                    {lang === "ts" ? <SiTypescript className="mok" /> : null}
                    {lang === "angular" ? (
                      <DiAngularSimple className="mokup" />
                    ) : null}
                    {lang === "mui" ? <SiMaterialui className="mokup" /> : null}
                  </>
                );
              })}

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("proyects.code")}
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("proyects.demo")}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="center__button">
        <a
          href="https://github.com/dmaceda/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("proyects.more")}
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
