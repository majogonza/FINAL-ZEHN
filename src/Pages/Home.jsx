import "../Styles/Home.css";
import Swal from "sweetalert2";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Imagen1 from "../assets/home/imagen1.webp";
import Imagen2 from "../assets/home/imagen2.webp";
import Imagen3 from "../assets/home/imagen3.webp";
import Imagen4 from "../assets/home/imagen4.webp";
import Imagen5 from "../assets/home/imagen5.webp";
import Imagen6 from "../assets/home/imagen6.webp";
import Imagen7 from "../assets/home/imagen7.webp";


const Home = () => {
  const navigate = useNavigate();

  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
  className="home-swiper"
></Swiper>

  const slides = [
  {
    img: Imagen3,
    alt: "Diseño interior",
    title: "Una experiencia Zehn",
    desc: "Arte, diseño y emociones reunidas en un mismo lugar para transformar la forma de habitar.",
    cta: "Conocer más",
    action: () => document.querySelector(".about-section")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    img: Imagen1,
    alt: "Arte contemporáneo",
    title: "Arte que transforma espacios",
    desc: "Descubre obras exclusivas que conectan emociones, arquitectura y expresión contemporánea.",
    cta: "Explorar galería",
    action: () => { window.scrollTo(0, 0); navigate("/gallery"); },
  },
  {
    img: Imagen4,
    alt: "Galería de arte",
    title: "Eventos que inspiran",
    desc: "Vive experiencias artísticas inmersivas creadas para conectar creatividad, cultura y comunidad.",
    cta: "Ver eventos",
    action: () => { window.scrollTo(0, 0); navigate("/events"); },
  },
];

  const handleReportButtonClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Te redireccionaremos a nuestra página principal",
      icon: "success",
      draggable: true,
    }).then(() => {
      window.location.href = "https://zehn.com.co/";
    });
  };

  return (
    <>
      <section className="hero-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="home-swiper"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="slide-content">
                <img src={s.img} alt={s.alt} className="slide-image" />
                <div className="slide-overlay" />
                <div className="slide-info">
                  <h1>{s.title}</h1>
                  <p>{s.desc}</p>
                  <button className="hero-button" onClick={s.action}>{s.cta}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="about-section">
        <div className="about-card">
          <div className="about-card-image">
            <img src={Imagen5} alt="Experiencia Zehn" />
          </div>
          <div className="about-card-content">
            <span className="about-mini-title">EXPERIENCIA ZEHN</span>
            <h2>El arte transforma la manera de habitar.</h2>
            <p>
              Zehn reúne arte contemporáneo, diseño y emociones en experiencias
              creadas para conectar personas, espacios y creatividad.
            </p>
            <p>
              Descubre artistas, eventos y obras que convierten cada espacio en
              una experiencia visual única.
            </p>
            <button className="about-button" onClick={() => { window.scrollTo(0, 0); navigate("/gallery"); }}>
              Explorar galería
            </button>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-title">
          <span>Z E H N</span>
          <h2>Una experiencia creada alrededor del arte.</h2>
          <p>Lo que tenemos para ti.</p>
        </div>
        <div className="experience-grid">
          <div className="experience-item">
            <div className="experience-image">
              <img src={Imagen7} alt="Galería" />
            </div>
            <h3>Galería de arte</h3>
            <p>
              Obras cuidadosamente seleccionadas para transformar espacios y
              emociones.
            </p>
          </div>
          <div className="experience-item">
            <div className="experience-image">
              <img src={Imagen2} alt="Espacios" />
            </div>
            <h3>Espacios</h3>
            <p>Diseño, arquitectura y arte conviviendo en un mismo lugar.</p>
          </div>
          <div className="experience-item">
            <div className="experience-image">
              <img src={Imagen6} alt="Eventos" />
            </div>
            <h3>Eventos</h3>
            <p>
              Encuentros artísticos creados para inspirar, aprender, conectar y
              compartir.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Zehn no se siente como una galería tradicional. Es un espacio donde
            el arte realmente logra quedarse contigo."
          </p>
          <div className="testimonial-author">
            — Asistente a Umbrares Contemporáneos
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;