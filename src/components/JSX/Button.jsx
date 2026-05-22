import "./CSS/Button.css";
import Swal from "sweetalert2";

const Button = () => {
  const phoneNumber = "573104742852";
  const message = "Hola, quiero más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Te redireccionaremos a nuestro chat de Whatsapp",
      icon: "success",
      draggable: true,
      confirmButtonColor: "var(--color-primary)",
      confirmButtonText: "OK",
    }).then(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  };

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={handleClick}
    >
      <i className="fa-brands fa-whatsapp whatsapp-button__icon"></i>
      <span></span>
    </a>
  );
};

export default Button;
