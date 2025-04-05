import React from "react";

const servicios = [
  { icon: "/icons/camping.svg", label: "Camping" },
  { icon: "/icons/cantina.svg", label: "Cantina" },
  { icon: "/icons/estacionamiento.svg", label: "Estacionanto" },
  { icon: "/icons/wifi.svg", label: "WiFi" },
  { icon: "/icons/baños.svg", label: "Baños" },
  { icon: "/icons/pileta.svg", label: "Pileta" },
  { icon: "/icons/accesorio.svg", label: "Acceso al Río" },
  { icon: "/icons/churrasqueras.svg", label: "Churrasqueras" },
];

export default function Servicios() {
  return (
    <>
      <h1 className="Titulos">Servicios</h1>

      <div className="IconosContainer">
        {servicios.map((servicio, idx) => (
          <div key={idx} className="IconoServicio">
            <img src={servicio.icon} alt={servicio.label} className="IconoSvg" />
            <span className="DescripcionIcono">
              {servicio.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
