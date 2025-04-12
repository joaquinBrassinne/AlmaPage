import React from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import { cantinaImagenes } from "../../utils/const/cantinaimg";
import { Button } from "../ui/button";


const menuLink = import.meta.env.VITE_LINK_CANTINA;
if (!menuLink) {
  console.warn("⚠️ La variable de entorno VITE_LINK_CANTINA no está definida.");
}

const Cantina = () => {

  return (
    <section className="w-full">
      <h1 className="Titulos">Nuestra Cantina</h1>
      <CarouselCard imgList={cantinaImagenes} range={5000} />
      <div className="CantinaContainer">
        <div>
          <p className="cantinaTetx">
            Nuestra cantina ofrece una deliciosa variedad de comidas y bebidas
            durante tu aventura al aire libre.
            <br /> Disfruta de desayunos, almuerzos, snacks y refrescantes
            bebidas.
            <br /> Contamos con un área de mesas al aire libre para que puedas
            disfrutar de tus alimentos rodeado de naturaleza.
            <br /> ¡El lugar perfecto para compartir buenos momentos y saborear
            lo mejor del camping!
          </p>
        </div>
        <div className="HoraAtencionContainer">
          <div>
            <h1 className="HoraAtencion flex items-center gap-2">
              <img
                src="/icons/reloj.svg"
                alt="icono reloj"
                className="iconoReloj"
              />
              Horario de atención de 8:00am a 00:00 pm
            </h1>
          </div>

          <div>
            {menuLink && (
              <a href={menuLink} target="_blank" rel="noopener noreferrer">
                <Button
                  className="BotonInstalaciones BotonSombra"
                  variant="secondary"
                >
                  Ver Carta
                </Button>
              </a>
            )}
          </div>

          <div>
            <p className="AdvertenciaCarta">
              (*) La carta puede estar sujeta a modificaciones
            </p>
          </div>
        </div>
        <div>
          <p className="porConsultas">
            Por consultas de precios y reservas{" "}
            <span className="text-accent font-bold">
              contactese con nosotros.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cantina;
