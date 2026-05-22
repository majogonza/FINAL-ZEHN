import { useCart } from "../../context/CartContext";
import "./CSS/Cart.css";

const parsePrice = (precio) => Number(precio.replace(/[^0-9]/g, ""));

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    setCartOpen,
    subtotal,
  } = useCart();

  return (
    <div className="cart-overlay" onClick={() => setCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            &times;
          </button>
        </div>

        <div className="cart-body">
          <div className="cart-items-section">
            {cartItems.length === 0 ? (
              <p className="cart-empty">Tu carrito está vacío.</p>
            ) : (
              <>
                <div className="cart-table-head">
                  <span>Producto</span>
                  <span>Precio</span>
                  <span>Cantidad</span>
                  <span>Total</span>
                  <span></span>
                </div>

                {cartItems.map((item) => (
                  <div className="cart-row" key={item.titulo}>
                    <div className="cart-product">
                      <img src={item.imagen} alt={item.titulo} />
                      <div className="cart-product-info">
                        <strong>{item.titulo}</strong>
                        <span>{item.autor}</span>
                      </div>
                    </div>

                    <span className="cart-price">{item.precio}</span>

                    <div className="cart-qty-controls">
                      <button onClick={() => updateQuantity(item.titulo, item.cantidad - 1)}>−</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => updateQuantity(item.titulo, item.cantidad + 1)}>+</button>
                    </div>

                    <span className="cart-total-cell">
                      ${(parsePrice(item.precio) * item.cantidad).toLocaleString()} USD
                    </span>

                    <button className="cart-remove" onClick={() => removeFromCart(item.titulo)}>
                      ✕
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="cart-summary-section">
            <div className="cart-summary-box">
              <h3>Resumen del pedido</h3>
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()} USD</span>
              </div>
              <div className="cart-summary-row free">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="cart-summary-total">
                <span>Total</span>
                <span>${subtotal.toLocaleString()} USD</span>
              </div>
              <button className="cart-checkout-btn">PAGAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
