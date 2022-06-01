import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./Context/CartContext";
import App from "./App";
import { AuhtProvider, AuthContext } from "./Context/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuhtProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuhtProvider>
  </StrictMode>
);
