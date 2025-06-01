import CarouselCard from '@/components/CarouselCard/CarouselCard'
import IconSpan from '@/components/IconSpan/IconSpan'
import PopUp from '@/components/PopUp/PopUp'
import { Clock, PawPrint, ShowerHead, Volume2, Zap } from 'lucide-react'

const CampingModal = () => {
    const phoneNumber = import.meta.env.VITE_NUMERO_CONTACTO_WPP
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const imgList = [{ path: '/img/imagen1.webp' }, { path: '/img/camping/camping1.webp' }, { path: '/img/camping/camping2.webp' }]
    return (
        <PopUp btnDesc='Ver Más' title='Camping'>
            <article className='popChildContainer'>
                <CarouselCard imgList={imgList} />
                <p className='cantinaTetx'>Nuestro camping ofrece un refugio natural con todas las comodidades para una experiencia única al aire libre. Disfruta de amplias parcelas para acampar,  áreas de picnic, senderos ecológicos y acceso a actividades recreativas como pesca, ciclismo y deportes al aire libre. Además, contamos con sanitarios modernos, duchas con agua caliente, zona de parrillas y seguridad las 24 horas para que tu estancia sea cómoda y segura.
                    <br />
                    ¡Vive la aventura con la tranquilidad de un espacio exclusivo y familiar!</p>
                <span className='HoraAtencion'>
                    <Clock />
                    Ingresos de 8:00 a 00:00pm
                </span>
                <div className='IconosContainer'>
                    <IconSpan><PawPrint className='iconSize' /> Pet Friendly</IconSpan>
                    <IconSpan><Volume2 className='iconSize' /> Volumen Moderado</IconSpan>
                    <IconSpan><ShowerHead className='iconSize' /> Duchas con agua caliente</IconSpan>
                    <IconSpan><Zap className='iconSize' /> Parcelas con electricidad</IconSpan>
                </div>
                <h6 className='AdvertenciaCarta'>(*)Menores de 18 años deben ingresar acompañados por sus padres</h6>
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
            </article>
        </PopUp>
    )
}

export default CampingModal