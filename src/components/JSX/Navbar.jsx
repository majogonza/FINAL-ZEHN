import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const inicio = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar__logo" onClick={inicio}>
        <img src="/Logo-Zehn-4x.svg" alt="Logo Zehn" className="navbar__logo-image" />
      </div>
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <nav className={`navbar__nav ${menuOpen ? "active" : ""}`}>
        <ul className="navbar__list">
          <li className="navbar__item"><Link to="/">Inicio</Link></li>
          <li className="navbar__item"><Link to="/events">Eventos</Link></li>
          <li className="navbar__item"><Link to="/gallery">Galeria</Link></li>
          <li
            className="navbar__item navbar__cart"
            onClick={() => setCartOpen(true)}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && (
              <span className="navbar__cart-badge">{totalItems}</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;