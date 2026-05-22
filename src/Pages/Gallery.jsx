import { useEffect, useState, useRef } from "react";
import "../Styles/Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard } from "swiper/modules";
import obrasImg from "../assets/encabezados/obras.webp";
import { Link } from "react-router-dom";
import FichaTecnica from "../components/JSX/FichaTecnica";
import FiltrosPanel from "../components/JSX/FiltrosPanel";

function Gallery() {
  const [obras, setObras] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/database/obras.json")
      .then((res) => res.json())
      .then((data) => {
        setObras(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error cargando datos");
        setLoading(false);
      });
  }, []);

  const [obraActual, setObraActual] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filtro, setFiltro] = useState("todas");
  const [precioRango, setPrecioRango] = useState(null);
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [fichaOpen, setFichaOpen] = useState(false);
  const [filtrosOpen, setFiltrosOpen] = useState(false);
  const swiperRef = useRef(null);
  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  const openFicha = (obra) => {
    setObraActual(obra);
    setFichaOpen(true);
  };

  const closeFicha = () => {
    setFichaOpen(false);
    setObraActual(null);
  };

  const irAGaleria = (obra) => {
    const index = obras.findIndex((o) => o.titulo === obra.titulo);

    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(index);

      document
        .getElementById("galeria")
        ?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        openFicha(obra);
      }, 1400);
    }
  };

  const parsePrice = (precio) => Number(precio.replace(/[^0-9]/g, ""));

  const obrasFiltradas = obras
    .filter((obra) => filtro === "todas" || obra.categoria === filtro)
    .filter((obra) => {
      const p = parsePrice(obra.precio);
      if (precioRango === "bajo") return p <= 950;
      if (precioRango === "medio") return p > 950 && p <= 1200;
      if (precioRango === "alto") return p > 1200;
      if (precioMin !== "" || precioMax !== "") {
        const min = precioMin !== "" ? Number(precioMin) : 0;
        const max = precioMax !== "" ? Number(precioMax) : Infinity;
        return p >= min && p <= max;
      }
      return true;
    });

  const filtrosActivos = [
    filtro !== "todas",
    precioRango !== null,
    precioMin !== "" || precioMax !== "",
  ].filter(Boolean).length;
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
        <img src={obrasImg} alt="banner" className="img-title" />
        <div className="banner-overlay">
          <Link to="/" className="volver">
            ← Volver
          </Link>
          <h2 className="obras-title">Galería de Arte</h2>
          <p className="obras-description">
            Explora nuestras obras disponibles.
          </p>
        </div>
      </div>

      <p className="instructions" id="galeria">
        Explora nuestra colección de obras cuidadosamente seleccionadas, donde
        cada pieza refleja estilo, creatividad y emoción. Desliza el carrusel
        para descubrir las diferentes obras y selecciona la imagen central para
        ver más detalles.
      </p>

      <main className="zehn-main">
        <section className="zehn-gallery">
          {obras.length > 0 && (
            <div className="swiper-nav-wrapper">
              <button
                className="swiper-nav-btn swiper-nav-prev"
                onClick={handlePrev}
                aria-label="Anterior"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <Swiper
                key={obras.length}
                modules={[EffectCoverflow, Pagination, Keyboard]}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                keyboard={{ enabled: true }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  forceSwiperUpdate();
                }}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                spaceBetween={24}
                loop={true}
                loopAdditionalSlides={2}
                watchSlidesProgress={true}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                coverflowEffect={{
                  rotate: 35,
                  stretch: 0,
                  depth: 60,
                  modifier: 1,
                  slideShadows: false,
                }}
              >
                {obras.map((obra, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => {
                        if (index === activeIndex) openFicha(obra);
                      }}
                    >
                      <img src={obra.imagen} alt={obra.titulo} />
                      <h3>{obra.titulo}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="swiper-nav-btn swiper-nav-next"
                onClick={handleNext}
                aria-label="Siguiente"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          )}
        </section>

        <h2 className="historias-title">Historias detrás de las obras</h2>

        <p className="historias-description">
          Detrás de cada obra hay una intención, una emoción y un momento único.
          Aquí descubrirás las historias que dieron vida a cada creación.
        </p>

        <div className="filtros-bar">
          <button
            className="btn-abrir-filtros"
            onClick={() => setFiltrosOpen(true)}
          >
            ☰ Filtros
            {filtrosActivos > 0 && (
              <span className="filtros-badge">{filtrosActivos}</span>
            )}
          </button>
          <p className="filtros-resultado">
            {obrasFiltradas.length} obra{obrasFiltradas.length !== 1 ? "s" : ""}{" "}
            encontrada{obrasFiltradas.length !== 1 ? "s" : ""}
          </p>
        </div>

        <section className="historia">
          {obrasFiltradas.map((obra, index) => (
            <div key={index} className="historia-card">
              <img src={obra.imagen} alt={obra.titulo} />

              <div className="historia-texto">
                <h2>{obra.titulo}</h2>
                <p>{obra.autor}</p>
                <p className="obra-precio">{obra.precio}</p>
                <p className="elemento-description">{obra.descripcion}</p>

                <button onClick={() => irAGaleria(obra)}>
                  Comprar en galería
                </button>
              </div>
            </div>
          ))}
        </section>

        {fichaOpen && obraActual && (
          <FichaTecnica obra={obraActual} onClose={closeFicha} />
        )}

        {filtrosOpen && (
          <FiltrosPanel
            filtro={filtro}
            setFiltro={setFiltro}
            precioRango={precioRango}
            setPrecioRango={setPrecioRango}
            precioMin={precioMin}
            setPrecioMin={setPrecioMin}
            precioMax={precioMax}
            setPrecioMax={setPrecioMax}
            onClose={() => setFiltrosOpen(false)}
          />
        )}
      </main>
    </div>
  );
}

export default Gallery;
