import { WifiIcon, PoolIcon, CampingIcon, CantineIcon, ParkingIcon, BathIcon, AccessIcon, GrillIcon } from '@/components';


const servicios = [
  { icon: <CampingIcon color='#2d2851' />, label: "Camping" },
  { icon: <CantineIcon color='#2d2851' />, label: "Cantina" },
  { icon: <ParkingIcon color='#2d2851' />, label: "Estacionamiento" },
  { icon: <WifiIcon color='#2d2851' />, label: "WiFi" },
  { icon: <BathIcon color='#2d2851' />, label: "Baños" },
  { icon: <PoolIcon color='#2d2851' />, label: "Pileta" },
  { icon: <AccessIcon color='#2d2851' />, label: "Acceso al Río" },
  { icon: <GrillIcon color='#2d2851' />, label: "Asadores" },
];

export default function Servicios() {
  return (
    <section id="servicios" className="sectionService">
      <h2 className="Titulos">Servicios</h2>

      <div className="IconosContainer">
        {servicios.map((servicio, idx) => (
          <div key={idx} className="IconoServicio">
              {servicio.icon}
            <span className="DescripcionIcono">{servicio.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
