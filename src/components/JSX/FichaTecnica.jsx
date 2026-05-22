import Swal from "sweetalert2";
import { useCart } from "../../context/CartContext";
import "./CSS/FichaTecnica.css";

function FichaTecnica({ obra, onClose }) {
  const { addToCart } = useCart();

  const handleComprar = () => {
    addToCart(obra);
    Swal.fire({
      icon: "success",
      title: "¡Obra agregada!",
      text: `"${obra.titulo}" se agregó al carrito.`,
      confirmButtonColor: "#d2b495",
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="ficha-overlay" onClick={onClose}>
      <div className="ficha-page" onClick={(e) => e.stopPropagation()}>
        <div className="ficha-header">
          {obra.titulo}
          <button
            className="ficha-close"
            onClick={onClose}
            aria-label="Cerrar ficha técnica"
          >
            &times;
          </button>
        </div>

        <div className="ficha-body">
          <div className="ficha-content">
            <div className="ficha-info">
              <div className="ficha-info-row">
                <p className="ficha-label">Autor:</p>
                <p className="ficha-value">{obra.autor}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Título de la obra:</p>
                <p className="ficha-value">{obra.titulo}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Año de creación:</p>
                <p className="ficha-value">{obra.año}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Técnica y materiales:</p>
                <p className="ficha-value">{obra.tecnica}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Dimensiones:</p>
                <p className="ficha-value">{obra.dimensiones}</p>
              </div>
              <div className="ficha-info-row">
                <p className="ficha-label">Precio:</p>
                <p className="ficha-value">{obra.precio}</p>
              </div>
            </div>

            <div className="ficha-image-col">
              <div className="ficha-image-frame">
                <img src={obra.imagen} alt={obra.titulo} />
              </div>
              <button className="ficha-buy-button" onClick={handleComprar}>Comprar</button>
            </div>
          </div>
          <hr className="ficha-divider" />
          <p className="ficha-desc">{obra.descripcion}</p>
          <p className="ficha-desc">{obra.historia}</p>
          <div className="ficha-footer">
            <span className="ficha-logo">zehn.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FichaTecnica;
