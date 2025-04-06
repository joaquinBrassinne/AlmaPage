import React from "react";

const instalacionesData = [
  {
    titulo: "Camping",
    imagen: "/img/imagen1.webp",
  },
  {
    titulo: "Cantina",
    imagen: "/img/imagen2.webp",
  },
];

const Instalaciones = () => {
  return (
    <section id="instalaciones" className="w-full">
      <h1 className="Titulos">Instalaciones</h1>
      <div className="InstalacionesContainer">
        {instalacionesData.map((instalacion, index) => (
          <div key={index} className="relative w-full">
            <img
              src={instalacion.imagen}
              alt={instalacion.titulo}
              className="w-full"
            />
            <div className="TituloYbotonContainer">
              <h2 className="TituloInstalaciones">{instalacion.titulo}</h2>
              <button className="BotonInstalaciones">Ver Más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instalaciones;
