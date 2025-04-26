import React from "react";
import { Tent, Utensils, CarFront , Wifi, Bath, Droplet, Waves, Flame } from "lucide-react";

const servicios = [
  { icon: Tent, label: "Camping" },
  { icon: Utensils, label: "Cantina" },
  { icon: CarFront , label: "Estacionamiento" },
  { icon: Wifi, label: "WiFi" },
  { icon: Bath, label: "Baños" },
  { icon: Droplet, label: "Pileta" },
  { icon: Waves, label: "Acceso al Río" },
  { icon: Flame, label: "Asadores" },
];

export default function Servicios() {
  return (
    <section id="servicios" className="sectionService">
      <h2 className="Titulos">Servicios</h2>

      <div className="IconosContainer">
        {servicios.map((servicio, idx) => {
          const IconComponent = servicio.icon;
          return (
            <div key={idx} className="IconoServicio">
              <IconComponent 
                size={24} 
                color="#000000" 
                className="IconoSvg"
              />
              <span className="DescripcionIcono">{servicio.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}