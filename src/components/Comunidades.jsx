import { useState } from "react";

function Comunidades() {

    const [comunidades, setComunidades] = useState([
        {
            nombre: "Eco Reciclaje",
            descripcion:
                "Grupo dedicado a promover la separación de residuos.",
            actividad: "Reciclaje",
            contacto: "#"
        },
        {
            nombre: "Guardianes del Bosque",
            descripcion:
                "Comunidad que realiza actividades de cuidado de espacios verdes.",
            actividad: "Cuidado de la naturaleza",
            contacto: "#"
        }
    ]);

    const [mensaje, setMensaje] = useState("");

    const [formulario, setFormulario] = useState({
        nombre: "",
        descripcion: "",
        actividad: "",
        contacto: ""
    });

    // Actualiza los valores del formulario
    function manejarCambio(event) {

        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    // Agrega una nueva comunidad
    function agregarComunidad(event) {

        event.preventDefault();

        // Validación básica
        if (
            !formulario.nombre ||
            !formulario.descripcion ||
            !formulario.actividad ||
            !formulario.contacto
        ) {
            setMensaje("Por favor completá todos los campos.");

            return;
        }

        const nuevaComunidad = {
            nombre: formulario.nombre,
            descripcion: formulario.descripcion,
            actividad: formulario.actividad,
            contacto: formulario.contacto
        };

        setComunidades([
            ...comunidades,
            nuevaComunidad
        ]);

        setMensaje("¡Comunidad agregada correctamente!");

        // Limpiar formulario
        setFormulario({
            nombre: "",
            descripcion: "",
            actividad: "",
            contacto: ""
        });

        /*
            Ejemplo de utilización del DOM.
            Modificamos directamente un elemento HTML.
        */

        const titulo = document.getElementById(
            "tituloComunidades"
        );

        if (titulo) {
            titulo.textContent = "Comunidades EcoNet";
        }
    }

    return (
        <section
            id="comunidades"
            className="seccion container"
        >

            <div className="tarjeta">

                <h2 id="tituloComunidades">
                    Comunidades EcoNet
                </h2>

                <div className="row g-4">

                    {comunidades.map((comunidad, index) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={index}
                        >

                            <div className="card comunidad-card h-100">

                                <div className="imagen-comunidad">
                                    <span>Imagen de ejemplo</span>
                                </div>

                                <div className="card-body">

                                    <h3 className="card-title">
                                        {comunidad.nombre}
                                    </h3>

                                    <p className="card-text">
                                        {comunidad.descripcion}
                                    </p>

                                    <p>
                                        <strong>
                                            Actividad:
                                        </strong>{" "}
                                        {comunidad.actividad}
                                    </p>

                                    <a
                                        href={comunidad.contacto}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-eco"
                                    >
                                        Contactar
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <div className="tarjeta mt-4">

                <h2>
                    Agregar una comunidad
                </h2>

                <p className="texto-ejemplo">
                    Los datos ingresados son solo de ejemplo y no se
                    guardan en una base de datos.
                </p>

                <form onSubmit={agregarComunidad}>

                    <div className="mb-3">

                        <label
                            htmlFor="nombre"
                            className="form-label"
                        >
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="form-control"
                            value={formulario.nombre}
                            onChange={manejarCambio}
                            placeholder="Ejemplo: Jóvenes Verdes"
                        />

                    </div>

                    <div className="mb-3">

                        <label
                            htmlFor="descripcion"
                            className="form-label"
                        >
                            Descripción
                        </label>

                        <textarea
                            id="descripcion"
                            name="descripcion"
                            className="form-control"
                            value={formulario.descripcion}
                            onChange={manejarCambio}
                            placeholder="Descripción de la comunidad"
                        ></textarea>

                    </div>

                    <div className="mb-3">

                        <label
                            htmlFor="actividad"
                            className="form-label"
                        >
                            Actividad
                        </label>

                        <input
                            type="text"
                            id="actividad"
                            name="actividad"
                            className="form-control"
                            value={formulario.actividad}
                            onChange={manejarCambio}
                            placeholder="Ejemplo: Limpieza de espacios verdes"
                        />

                    </div>

                    <div className="mb-3">

                        <label
                            htmlFor="contacto"
                            className="form-label"
                        >
                            Enlace de contacto
                        </label>

                        <input
                            type="url"
                            id="contacto"
                            name="contacto"
                            className="form-control"
                            value={formulario.contacto}
                            onChange={manejarCambio}
                            placeholder="https://..."
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-eco"
                    >
                        Agregar comunidad
                    </button>

                </form>

                {mensaje && (
                    <div
                        id="mensajeComunidad"
                        className="alert alert-success mt-3"
                    >
                        {mensaje}
                    </div>
                )}

            </div>

        </section>
    );
}

export default Comunidades;