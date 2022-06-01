import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Wishlist from "./Wishlist";
export default function () {
  const { isAutho, login, logout } = useContext(AuthContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAutho) logout();
          else login("R", "z");
        }}
      >
        {isAutho ? "logout" : "login"}
      </button>
      <Wishlist />
    </div>
  );
}
