function Video() {
    return (
        <section
            id="video"
            className="seccion container"
        >

            <div className="tarjeta">

                <h2>
                    Te ayudamos a cuidar el medio ambiente
                </h2>

                <div className="video-container">

                    {/* 
                        Video de ejemplo.
                        Se puede reemplazar por un video propio.
                    */}

                    <iframe
                        src="https://www.youtube.com/embed/6jQ7y_qQYUA"
                        title="Video sobre cuidado del medio ambiente"
                        allowFullScreen
                    ></iframe>

                </div>

                <p className="mt-3">
                    En este espacio podés colocar un video educativo
                    relacionado con el cuidado del medio ambiente.
                </p>

            </div>

        </section>
    );
}

export default Video;