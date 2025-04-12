import React from 'react'

const Ubicacion = () => {
    return (
        <section className='sectionService'>
            <h1 className='Titulos'>Ubicacion</h1>
            <div className='Ubicacion-section'>
                <div className='Mapa'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.0714187322905!2d-64.23297605190983!3d-32.16971733458063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd66b70dec2103%3A0x6bc0ac31fbfb2e65!2sCamping%20Balneario%20Almafuerte!5e0!3m2!1ses!2sar!4v1744039956276!5m2!1ses!2sar" 
                        width="100%" 
                        height="200"
                        // className="md:h-64 border-2 border-gray-200 rounded-lg" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='Resenias'>
                    <a 
                        href="https://www.google.com/maps/place/Camping+Balneario+Almafuerte/reviews" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='Resenias-reviews'
                    >
                        <img 
                            src="/icons/G Maps.svg" 
                            alt="Google Maps Icon" 
                            className='Icono-map' 
                        />
                        <span className='Text-resenias'>Reseñas</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Ubicacion