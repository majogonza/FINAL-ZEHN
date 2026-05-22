import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const parsePrice = (precio) => Number(precio.replace(/[^0-9]/g, ""));

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error);
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (obra) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.titulo === obra.titulo);
      if (existing) {
        return prev.map((item) =>
          item.titulo === obra.titulo
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...obra, cantidad: 1 }];
    });
  };

  const removeFromCart = (titulo) => {
    setCartItems((prev) => prev.filter((item) => item.titulo !== titulo));
  };

  const updateQuantity = (titulo, cantidad) => {
    if (cantidad < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.titulo === titulo ? { ...item, cantidad } : item
      )
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.precio) * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartOpen,
        setCartOpen,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
