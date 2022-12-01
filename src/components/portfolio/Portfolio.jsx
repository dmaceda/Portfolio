import React from "react";
import "./portfolio.css";
import { data } from "../utils/data";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Proyect</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <div className="portfolio__items">
              <div key={id} className="portfolio__item-image">
                <img src={image} alt={title} width="100%" />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <DiCss3 className="mokup" />
              <DiJavascript1 className="mokup" />
              <DiReact className="mokup" />
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
