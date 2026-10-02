function Footer() {

    function enviarComentario(event) {

        event.preventDefault();

        const nombre = document.getElementById(
            "nombreComentario"
        ).value;

        const email = document.getElementById(
            "emailComentario"
        ).value;

        const comentario = document.getElementById(
            "comentario"
        ).value;

        const mensaje = document.getElementById(
            "mensajeComentario"
        );

        if (!nombre || !email || !comentario) {

            mensaje.className = "alert alert-danger mt-3";

            mensaje.textContent =
                "Por favor completá todos los campos.";

            return;
        }

        mensaje.className = "alert alert-success mt-3";

        mensaje.textContent =
            "¡Gracias por dejar tu comentario!";

        // Limpiamos el formulario
        document.getElementById(
            "formComentario"
        ).reset();
    }

    return (
        <footer
            id="contacto"
            className="footer-econet"
        >

            <div className="container">

                <div className="row g-4">

                    <div className="col-md-6">

                        <h2>
                            Contactanos
                        </h2>

                        <p>
                            <strong>Instagram:</strong>{" "}
                            [Agregar Instagram]
                        </p>

                        <p>
                            <strong>WhatsApp:</strong>{" "}
                            [Agregar WhatsApp]
                        </p>

                        <p>
                            <strong>Email:</strong>{" "}
                            [Agregar Email]
                        </p>

                        <p>
                            <strong>Ubicación:</strong>{" "}
                            [Agregar ubicación]
                        </p>

                    </div>

                    <div className="col-md-6">

                        <h2>
                            Dejanos tu comentario
                        </h2>

                        <form
                            id="formComentario"
                            onSubmit={enviarComentario}
                        >

                            <div className="mb-3">

                                <label
                                    htmlFor="nombreComentario"
                                    className="form-label"
                                >
                                    Nombre
                                </label>

                                <input
                                    type="text"
                                    id="nombreComentario"
                                    className="form-control"
                                    placeholder="Tu nombre"
                                />

                            </div>

                            <div className="mb-3">

                                <label
                                    htmlFor="emailComentario"
                                    className="form-label"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="emailComentario"
                                    className="form-control"
                                    placeholder="tuemail@email.com"
                                />

                            </div>

                            <div className="mb-3">

                                <label
                                    htmlFor="comentario"
                                    className="form-label"
                                >
                                    Comentario
                                </label>

                                <textarea
                                    id="comentario"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Escribí tu comentario"
                                ></textarea>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-light"
                            >
                                Enviar comentario
                            </button>

                        </form>

                        <div
                            id="mensajeComentario"
                            className="mt-3"
                        ></div>

                    </div>

                </div>

                <hr />

                <p className="text-center mb-0">
                    © 2026 EcoNet - Proyecto educativo
                </p>

            </div>

        </footer>
    );
}

export default Footer;