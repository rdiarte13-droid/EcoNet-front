function Navbar() {
    return (
        <header id="inicio">

            <div className="container bg-dark text-center-white py-4">
                <h1 className="titulo-principal">
                    EcoNet
                </h1>

                <p className="subtitulo">
                    Conectados por un planeta más limpio
                </p>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark navbar-econet">

                <div className="container">

                    <a className="navbar-brand fw-bold" href="#inicio">
                        EcoNet
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuPrincipal"
                        aria-controls="menuPrincipal"
                        aria-expanded="false"
                        aria-label="Abrir menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="menuPrincipal"
                    >

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#inicio">
                                    Inicio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#informacion">
                                    Información
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#video">
                                    Video
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#lugares">
                                    Lugares
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#comunidades">
                                    Comunidades
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">
                                    Contacto
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </header>
    );
}

export default Navbar;