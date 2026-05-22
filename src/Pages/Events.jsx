import { useEffect, useState } from "react";
import "./../Styles/Events.css";
import eventosImg from "../assets/encabezados/eventos.webp";
import { Link } from "react-router-dom";
import Inscripcion from "../components/JSX/Inscripcion";

function Events() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvento, setSelectedEvento] = useState(null);

  const [eventos, setEventos] = useState({
    abril: [],
    mayo: [],
  });

  useEffect(() => {
  fetch("/database/eventos.json")
    .then((res) => res.json())
    .then((data) => {
      setEventos(data);
    });
}, []);

  
  const [direccion, setDireccion] = useState("Zehn Living Medellin");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="banner-title">
        <img src={eventosImg} alt="banner" className="img-title" />
        <div className="banner-overlay">
          <Link to="/" className="volver">
            ← Volver
          </Link>
          <h2 className="eventos-title">Eventos</h2>
          <p className="eventos-description">
            Reserva tu lugar y sé parte de nuestros próximos encuentros
            artísticos.
          </p>
        </div>
      </div>

      <p className="instructions">
        Descubre espacios diseñados para inspirar, aprender y conectar a través
        del arte. Explora experiencias únicas que despiertan la creatividad y
        transforman tu manera de ver y vivir lo artístico.
      </p>

      <main className="events-container">
        <h2 className="events-title">ABRIL 2026</h2>
        <div className="events-list">
          {eventos.abril.map((eventabril, index) => (
            <div className="event-card" key={index}>
              <img
                src={eventabril.image}
                alt={eventabril.title}
                className="event-image"
              />
              <div className="event-details">
                <p className="event-date">{eventabril.date}
                </p>
                <h3 className="event-title">{eventabril.title}</h3>
                <button
                  className="event-location"
                  onClick={() => {
                    setDireccion(eventabril.location);
                    document.getElementById("mapa")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="fa-solid fa-location-dot"></i>
                  {eventabril.location}
                </button>
                <button
                  className="zehn-register-button"
                  onClick={() => {
                    setSelectedEvento(eventabril);
                    setShowModal(true);
                  }}
                  aria-label={`Inscribirse al evento ${eventabril.title}`}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="events-title">MAYO 2026</h2>
        <div className="events-list">
          {eventos.mayo.map((eventmayo, index) => (
            <div className="event-card" key={index}>
              <img
                src={eventmayo.image}
                alt={eventmayo.title}
                className="event-image"
              />
              <div className="event-details">
                <p className="event-date">{eventmayo.date}
                </p>
                <h3 className="event-title">{eventmayo.title}</h3>
                <button
                  className="event-location"
                  onClick={() => {
                    setDireccion(eventmayo.location);
                    document.getElementById("mapa")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <i className="fa-solid fa-location-dot"></i>
                  {eventmayo.location}
                </button>
                <button
                  className="zehn-register-button"
                  onClick={() => {
                    setSelectedEvento(eventmayo);
                    setShowModal(true);
                  }}
                  aria-label={`Inscribirse al evento ${eventmayo.title}`}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && selectedEvento && (
          <Inscripcion
            evento={selectedEvento}
            onClose={() => setShowModal(false)}
          />
        )}
        <section className="location-section" id="mapa">
          <h2 className="location-title">¿Comó llegar a nuestros eventos?</h2>
          <div className="location-container">
            <iframe
              src={`https://www.google.com/maps?q=${direccion}&output=embed`}
              width="90%"
              height="400"
              title="Ubicación eventos"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Events;
