import React, { createContext, useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
export default function Cart() {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}
