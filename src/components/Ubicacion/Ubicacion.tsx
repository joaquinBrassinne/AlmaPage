import React from 'react'

const Ubicacion = () => {
    return (
        <section className='sectionService' id='ubicacion'>
            <h2 className='Titulos'>Ubicacion</h2>
            <div className='Ubicacion-section'>
                <div className='Mapa'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.0714187322905!2d-64.23297605190983!3d-32.16971733458063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd66b70dec2103%3A0x6bc0ac31fbfb2e65!2sCamping%20Balneario%20Almafuerte!5e0!3m2!1ses!2sar!4v1744039956276!5m2!1ses!2sar" 
                        width="100%" 
                        height="200"
                        // className="md:h-64 border-2 border-gray-200 rounded-lg" 
                        // allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='Resenias'>
                    <a 
                        href="https://www.google.com/search?q=balneario+almafuerte&oq=&gs_lcrp=EgZjaHJvbWUqCQgGECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQsxMzk3NzI2ajBqN6gCCLACAfEFYHuRUkT0Ye0&sourceid=chrome&ie=UTF-8#wptab=si:APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfMakrXbnw6AHJkaps6kMm0Q_0qc_EgyXSWTekEs3ntQRq15CyxRcO45USTf_kwcWZLN-eiV8hQ_tFzHNtpR9ZgN3ddfEw4ZLiheKX8EMM2_P4qMDA%3D%3D" 
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