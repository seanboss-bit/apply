import React from "react";
import Navbar from "../components/Navbar";
import Offers from "../components/Offers";

const Bond = ({ user, setUser, cart, setCart }) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} cart={cart} />
      <Offers user={user} setCart={setCart} cart={cart} />
    </>
  );
};

export default Bond;
