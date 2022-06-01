import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Cart from "./Cart";
export default function Product() {
  const { isAutho } = useContext(AuthContext);
  return (
    <div>
      Product:{isAutho ? "logged in" : "loggedout"}
      <Cart />
    </div>
  );
}
