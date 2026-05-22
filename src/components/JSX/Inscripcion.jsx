import { useState } from "react";
import Swal from "sweetalert2";
import "./CSS/Inscripcion.css";
import "./CSS/FichaTecnica.css";
import "../../Styles/Events.css"

function ModalInscripcion({ evento, onClose }) {
  const [step, setStep] = useState("ficha");
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    correo: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const { nombre, cedula, telefono, correo } = form;
    if (!nombre || !cedula || !telefono || !correo) {
      Swal.fire("Error", "Completa todos los campos", "error");
      return;
    }
    if (
      !/^\d+$/.test(cedula) ||
      !/^\d+$/.test(telefono) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
    ) {
      Swal.fire("Error", "Verifica los datos ingresados.", "error");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Inscripción enviada!",
      text: `Tu inscripción al evento fue exitosa.`,
      confirmButtonColor: "#d2b495",
    });

    onClose();
  };

return (
  <div className="ficha-overlay" onClick={onClose}>
    <div
      className="ficha-page"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="ficha-evento-close"
        onClick={onClose}
        aria-label="Cerrar ficha técnica"
      >
        &times;
      </button>

      {/* FICHA TÉCNICA */}
      {step === "ficha" && (
        <>
          <div className="ficha-header">
            {evento.title}
          </div>
          <div className="ficha-body">
            <div className="ficha-content-evento">
              <div className="ficha-info">
                <div className="ficha-info-row">
                  <p className="ficha-label">Fecha:</p>
                  <p className="ficha-value">
                    {evento.date}
                  </p>
                </div>
                <div className="ficha-info-row">
                  <p className="ficha-label">Hora:</p>
                  <p className="ficha-value">
                    {evento.hour}
                  </p>
                </div>
                <div className="ficha-info-row">
                  <p className="ficha-label">Ubicación:</p>
                  <p className="ficha-value">
                    {evento.location}
                  </p>
                </div>
                <div className="ficha-info-row">
                  <p className="ficha-label">Ponente:</p>
                  <p className="ficha-value">
                    {evento.author}
                  </p>
                </div>
              </div>
              <div className="ficha-image-col-evento">
                <img className="ficha-image-frame-evento"
                  src={evento.image}
                  alt={evento.title}
                />
              </div>
            </div>
            <hr className="ficha-divider" />
            <p className="ficha-desc-evento">
              {evento.description}
            </p>
            <button
              className="zehn-register-button-evento"
              onClick={() => setStep("formulario")}
            >
              Inscribirse
            </button>
            <div className="ficha-footer">
              <span className="ficha-logo">
                zehn.
              </span>
            </div>
          </div>
        </>
      )}

      {step === "formulario" && (
        <div className="ficha-body">
          <h2 className="form-title">
            Formulario de inscripción
          </h2>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={form.nombre}
              onChange={handleChange}
            />
            <label>Cédula</label>
            <input
              type="text"
              name="cedula"
              placeholder="Ingresa tu cédula"
              value={form.cedula}
              onChange={handleChange}
            />
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              placeholder="Ingresa tu teléfono"
              value={form.telefono}
              onChange={handleChange}
            />
            <label>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              placeholder="Ingresa tu correo"
              value={form.correo}
              onChange={handleChange}
            />
          </div>
          <button
            className="zehn-register-button" 
            onClick={handleSubmit}
          >
            Enviar inscripción
          </button>
        </div>
      )}
    </div>
  </div>
);
}
export default ModalInscripcion;
