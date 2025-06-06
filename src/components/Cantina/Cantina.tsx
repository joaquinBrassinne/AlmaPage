import CarouselCard from "../CarouselCard/CarouselCard";
import { cantinaImagenes } from "../../utils/const/cantinaimg";
import { Button } from "../ui/button";
import PopUp from "../PopUp/PopUp";
import { Clock } from "lucide-react";


const menuLink = import.meta.env.VITE_LINK_CANTINA;
const phoneNumber = import.meta.env.VITE_NUMERO_CONTACTO_WPP
const whatsappUrl = `https://wa.me/${phoneNumber}`;


const Cantina = () => {

  return (
    <PopUp btnDesc="Ver Más" title="Nuestra Cantina">
      <article className="w-full popChildContainer">
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
            <span className="HoraAtencion">
              <Clock />
              Horario de atención de 8:00am a 00:00 pm
            </span>

            <div className="hidden">
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

            <div className="hidden">
              <p className="AdvertenciaCarta">
                (*) La carta puede estar sujeta a modificaciones
              </p>
            </div>
          </div>
          <div>
            <p className="porConsultas">
              Por consultas de precios y reservas{" "}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-bold hover:underline"
                aria-label="Contactar por WhatsApp"
              >
                contáctese con nosotros.
              </a>
            </p>
          </div>
        </div>
      </article>
    </PopUp>
  );
};

export default Cantina;
