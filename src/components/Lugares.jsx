function Lugares() {

    const lugares = [
        {
           nombre: "Bosque Natural",
            imagen: "/Imagenes/bosque-natural.jpg",
            descripcion:
                "Espacio natural donde podemos aprender sobre la importancia de conservar los bosques."
        },
        {
            nombre: "Punto Verde",
            imagen: "/Imagenes/puntos-verdes.jpeg",
            descripcion:
                "Lugar destinado a la separación y recepción de diferentes materiales reciclables."
        },
        {
            nombre: "Reserva Ecológica",
            imagen: "/Imagenes/imagen3-manos.avif",
            descripcion:
                "Espacio dedicado a la protección de la naturaleza y la biodiversidad."
        }
    ];

    return (
        <section
            id="lugares"
            className="seccion container"
        >

            <div className="tarjeta">

                <h2>
                    Conocé nuestros lugares
                </h2>

                <div
                    id="carouselEcoNet"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >

                    <div className="carousel-indicators">

                        {lugares.map((lugar, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselEcoNet"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={
                                    index === 0 ? "true" : undefined
                                }
                                aria-label={`Diapositiva ${index + 1}`}
                            ></button>
                        ))}

                    </div>

                    <div className="carousel-inner">

                        {lugares.map((lugar, index) => (

                            <div
                                key={index}
                                className={`carousel-item ${
                                    index === 0 ? "active" : ""
                                }`}
                            >

                                <img
                                    src={lugar.imagen}
                                    className="d-block w-100 imagen-carrusel"
                                    alt={lugar.nombre}
                                />

                                <div className="carousel-caption">

                                    <h3>
                                        {lugar.nombre}
                                    </h3>

                                    <p>
                                        {lugar.descripcion}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselEcoNet"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">
                            Anterior
                        </span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselEcoNet"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">
                            Siguiente
                        </span>
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Lugares;