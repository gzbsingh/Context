import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
export default function Wishlist() {
  const { count } = useContext(CartContext);
  return <div>wishlist:{count}</div>;
}
