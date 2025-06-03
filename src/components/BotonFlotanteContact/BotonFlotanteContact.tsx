const BotonFlotanteContact = () => {
  // Información de contacto (reemplazar con tus datos)
  const contactInfo = {
    instagram: import.meta.env.VITE_LINK_INSTAGRAM,
    email: import.meta.env.VITE_LINK_GMAIL,
    phone: import.meta.env.VITE_NUMERO_CONTACTO_WPP
  };
      
  const tertiaryColorClass = "text-tertiary";
  
  return (
    <div className="Boton-flotante-contacto">
      {/* Contenedor con degradado de blanco a transparente - menos transparente */}
      <div className="Contenedor-degradado">
        <div className="Separacion-iconos">
          {/* Botón de Instagram */}
          <a
            href={`https://instagram.com/${contactInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="Boton-instagram hover:scale-110 active:scale-110 focus:scale-110 transition-transform duration-300"
            aria-label="Visitar Instagram"
          >
            <svg
              className={`w-5 h-5 ${tertiaryColorClass} hover:text-pink-500 active:text-pink-500 focus:text-pink-500 transition-colors duration-300`}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          
          {/* Botón de Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="Boton-email hover:scale-110 transition-transform duration-300"
            aria-label="Enviar Email"
          >
            <svg
              className={`w-5 h-5 ${tertiaryColorClass} hover:text-blue-500 active:text-blue-500 focus:text-blue-500 transition-colors duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          
          {/* Botón de Teléfono */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="Boton-telefono hover:scale-110 transition-transform duration-300"
            aria-label="Llamar por teléfono"
          >
            <svg
              className={`w-5 h-5 ${tertiaryColorClass} hover:text-green-500 active: active:text-green-500 focus:text-green-500 transition-colors duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BotonFlotanteContact;