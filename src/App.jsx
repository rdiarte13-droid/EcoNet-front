import Navbar from "./components/Navbar.jsx";
import Presentacion from "./components/Presentacion.jsx";
import Video from "./components/Video.jsx";
import Lugares from "./components/Lugares.jsx";
import Comunidades from "./components/Comunidades.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Presentacion titulo="inicio de la pagina"/>
                <Video titulo="video explicativo"/>
                <Lugares lugares={lugares} />
                <Comunidades titulo="grupos de intercambio reciclable" />
            </main>

            <Footer />
        </>
    );
}

export default App;