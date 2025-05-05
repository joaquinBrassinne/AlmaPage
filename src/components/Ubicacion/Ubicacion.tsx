import React, { useState, useEffect } from 'react';

const Ubicacion = () => {
  // Estado para el efecto active/hover en el botón de reseñas
  const [isActive, setIsActive] = useState(false);
  
  // Estado para indicar cuando el mapa está cargado
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Estado para la animación de entrada
  const [isVisible, setIsVisible] = useState(false);
  
  // Efecto para activar la animación de entrada al cargar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Función para manejar eventos de touch y mouse
  const handleInteractionStart = () => setIsActive(true);
  const handleInteractionEnd = () => setIsActive(false);

  return (
    <section 
      className={`sectionService transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      id='ubicacion'
    >
      <h1 className='Titulos transition-colors duration-300 active:text-primary'>
        Ubicacion
      </h1>
      
      <div className='Ubicacion-section'>
        {/* Contenedor del mapa con efecto de aparición suave */}
        <div 
          className={`Mapa overflow-hidden rounded-lg shadow-md transition-all duration-500 ${
            mapLoaded ? 'opacity-100' : 'opacity-70'
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.0714187322905!2d-64.23297605190983!3d-32.16971733458063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd66b70dec2103%3A0x6bc0ac31fbfb2e65!2sCamping%20Balneario%20Almafuerte!5e0!3m2!1ses!2sar!4v1744039956276!5m2!1ses!2sar"
            width="100%"
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className="Animacion-mapa"
          ></iframe>
        </div>
        
        {/* Contenedor de reseñas con efectos para touch y hover */}
        <div className='Resenias'>
          <a
            href="https://www.google.com/search?q=balneario+almafuerte&oq=&gs_lcrp=EgZjaHJvbWUqCQgGECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQsxMzk3NzI2ajBqN6gCCLACAfEFYHuRUkT0Ye0&sourceid=chrome&ie=UTF-8#wptab=si:APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfMakrXbnw6AHJkaps6kMm0Q_0qc_EgyXSWTekEs3ntQRq15CyxRcO45USTf_kwcWZLN-eiV8hQ_tFzHNtpR9ZgN3ddfEw4ZLiheKX8EMM2_P4qMDA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`Resenias-reviews rounded-lg p-2 transition-all duration-300 hover:bg-gray-50 active:bg-gray-100 ${
              isActive ? 'shadow-md bg-gray-100' : ''
            }`}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            <div className="flex items-center justify-center">
              <img
                src="/icons/G Maps.svg"
                alt="Google Maps Icon"
                className={`Icono-map transition-all duration-300 ${
                  isActive ? 'scale-110' : ''
                } hover:scale-110 active:scale-110`}
              />
              <span className={`Text-resenias ml-2 transition-all duration-300 ${
                isActive ? 'text-primary font-medium' : ''
              } active:text-primary active:font-medium`}>
                Reseñas
              </span>
            </div>
            
            {/* Indicador visual para dispositivos móviles */}
            <div className={`h-0.5 bg-primary mt-1 transition-all duration-300 ${
              isActive ? 'w-full' : 'w-0'
            }`}></div>
          </a>
        </div>
      </div>
      
      {/* Indicador de pulsación para usuarios móviles (visible solo en pantallas pequeñas) */}
      <div className="Pulsacion-usuarios-moviles">
        Pulsa para interactuar
      </div>
    </section>
  );
};

export default Ubicacion;