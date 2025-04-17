import React, { FC } from "react";
import CampingModal from "./CampingModal/CampingModal";
import Cantina from "../Cantina/Cantina";


interface Instalacion {
  titulo: string;
  imagen: string;
  comp: FC; // FC = Functional Component
}

const instalacionesData: Instalacion[] = [
  {
    titulo: "Camping",
    imagen: "/img/imagen1.webp",
    comp: CampingModal
  },
  {
    titulo: "Cantina",
    imagen: "/img/imagen2.webp",
    comp: Cantina
  },
];

const Instalaciones = () => {
  return (
    <section id="instalaciones" className="InstalacionesContainer">
      <h1 className="Titulos">Instalaciones</h1>
      <div className="InstalacionesContainer">
        {instalacionesData.map((instalacion, index) => {
          const Componente = instalacion.comp;
          return (
            <div key={index} className="relative w-full">
              <img
                src={instalacion.imagen}
                alt={instalacion.titulo}
                className="w-full"
              />
              <div className="TituloYbotonContainer">
                <h2 className="TituloInstalaciones">{instalacion.titulo}</h2>
                <Componente />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Instalaciones;
