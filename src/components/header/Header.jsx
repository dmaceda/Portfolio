import { React, useState, useEffect } from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me2.png";
import HeaderSocial from "./HeaderSocial";
import Typist from "react-typist";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const words = [
    "< Frontend Developer />",
    "< UX Designer />",
    "< UI Designer />",
    "< Amateur Photographer />",
  ];
  const [count, setCount] = useState(1);
  const [scrool, setScrool] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  useEffect(() => {
    window.onscroll = () => {
      let move = window.pageYOffset;
      if (move === 0) {
        setScrool(1);
      } else {
        setScrool(0);
      }
    };
  }, [scrool]);

  return (
    <div id="/" className="header">
      <header className="container header__container">
        <h1>
          {t("header.title")}
          <a
            href="https://www.linkedin.com/in/dmaceda/"
            target="_blank"
            id="header_name"
          >
            Diego Maceda
          </a>
        </h1>

        <div className="intro-text-container">
          {count ? (
            <Typist
              className="intro-text-anim"
              avgTypingDelay={100}
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
              }}
              onTypingDone={() => setCount(0)}
            >
              <span className="title">{words[0]}</span>
              <Typist.Backspace count={words[0].length} delay={800} />
              <span className="title">{words[1]}</span>
              <Typist.Backspace count={words[1].length} delay={800} />
              <span className="title">{words[2]}</span>
              <Typist.Backspace count={words[2].length} delay={800} />
              <span className="title">{words[3]}</span>
              <Typist.Backspace count={words[3].length} delay={800} />
            </Typist>
          ) : (
            0
          )}
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        <HeaderSocial />
        <img className="me" src={ME} alt="me" />
      </header>
      <CTA />
      {scrool ? (
        <div className="watermark">
          <small>Copyright&copy; 2023 Diego Maceda. {t("header.copy")}</small>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
