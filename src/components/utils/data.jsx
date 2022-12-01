import CLIMA from "../../assets/clima.png";
import CALCULATOR from "../../assets/calculator.png";
import GAMES from "../../assets/GAMES-LAND.png";
import PORTFOLIO from "../../assets/port.png";
import CRIPTO from "../../assets/cripto_m.png";
import TUSPACIO from "../../assets/tuspacio.png";
import LITEFLIX from "../../assets/liteflix.png";
import LOGIN from "../../assets/login.png";

export const data = [
  {
    id: 1,
    image: GAMES,
    title: "Games-Land SPA",
    description:
      "Single Page Aplication adaptable que nos permite ver en detalle mas  de 2000 videojuegos, incluye: Búsquedas, filtrados, ordenamientos y creación. Diseñe un prototipo de alta fidelidad en Figma, que luego desarrolle utilizando para el Front: React, Redux y CSS puro y para el Back : Node JS con Express.",
    github: "https://github.com/dmaceda/Videogames",
    demo: "https://games-land.vercel.app/",
  },
  {
    id: 2,
    image: TUSPACIO,
    title: "TuSpacio Ecommerce",
    description:
      "Se trata de un Ecommerce de productos de belleza, cuenta con autenticación con Aut0 y pasarela de pago con Stripe. Utilizamos Material UI como framework de estilos. Proyecto realizado en conjunto con 7 desarrolladores, participe activamente en el diseño de la interfaz y como desarrollador Frontend.",
    github: "https://github.com/ENDERSON-MARIN/PG-TUSPACIO-FRONTEND",
    demo: "https://tuspacio.vercel.app/",
  },

  {
    id: 3,
    image: CRIPTO,
    title: "Criptomonedas",
    description:
      "Se trata de un conversor de las diez Criptomonedas mas populares a cuatro monedas distintas. Consume la API min-api.cryptocompare.com .En este proyecto reforcé conocimientos en React y comencé a utilizar Custom Hooks. HTML, CSS, JavaScript React JS fueron las tecnologías utilizadas. ",
    github: "https://github.com/dmaceda/Criptomonedas",
    demo: "https://dmaceda.github.io/Criptomonedas/",
  },
  {
    id: 4,
    image: CLIMA,
    title: "Weather SPA",
    description:
      "La aplicación de pronóstico del tiempo es una SPA que nos entrega una tarjeta por cada ciudad que consultemos, con la informacion del clima en tiempo real, viento y temperatura. Clickeando sobre cada ciudad podemos acceder a información mas detallada",
    github: "https://github.com/dmaceda/Clima-App",
    demo: "https://dmaceda.github.io/Clima-App/",
  },
  {
    id: 5,
    image: CALCULATOR,
    title: "Responsive Calculator",
    description:
      "Esta es una aplicación desarrollada con HTML, CSS & React, se trata de una calculadora interactiva que realiza las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división). Su estructura inicial fue creada con el comando npx create-react-app.                         ",
    github: "https://github.com/dmaceda/Calculator",
    demo: "https://dmaceda.github.io/Calculator/",
  },

  {
    id: 6,
    image: PORTFOLIO,
    title: "Responsive Portfolio",
    description:
      "Esta es una aplicación desarrollada con HTML, CSS & React JS. Se trata de mi Portfolio personal, donde podran encontrar mi información de contacto, mis conocimientos y objetivos.  Mis soft & tech skill actualizadas y podran visualizar  mis ultimos proyectos.",
    github: "https://github.com/dmaceda/Portfolio",
    demo: "https://dmaceda.github.io/Portfolio/",
  },
  {
    id: 7,
    image: LITEFLIX,
    title: "Liteflix",
    description:
      "El proyecto consiste en el desarrollo un Catálogo de Películas dinámico. Lista una película destacada, y películas populares provenientes de una API pública. Sin embargo, el catálogo puede ser actualizado por el usuario, pudiendo agregar películas que se almacenan en localStorage.",
    github: "https://github.com/dmaceda/LiteFlix-Challenge",
    demo: "https://liteflix-three.vercel.app/",
  },

  {
    id: 8,
    image: LOGIN,
    title: "Login",
    description:
      "Componente Login desarrollado con React y TypeScript para la pasantía realizada en Mercury Developer Team. Permite al usuario loguearse y desloguearse correctamente colocando los datos de acceso correspondientes, el requerimiento era solo para uso mobile",
    github: "https://github.com/dmaceda/react-test-assignment",
    demo: "https://react-test-assignment-dmaceda.vercel.app/",
  },
];
