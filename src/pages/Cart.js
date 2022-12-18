import React from "react";
import CartPage from "../components/CartPage";
import Navbar from "../components/Navbar";

const Cart = ({ user, setUser, cart, updateCart,removeCart }) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} cart={cart} />
      <CartPage cart={cart} updateCart={updateCart} removeCart={removeCart}/>
    </>
  );
};

export default Cart;
