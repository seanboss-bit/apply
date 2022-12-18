import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bond from "./pages/Bond";
import { useState } from "react";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";

function App() {
  const [user, setUser] = useState(false);
  const [cart, setCart] = useState([]);
  const updateCart = (id, direction) => {
    if (direction === "r") {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart(
        cart.map((item) =>
          item.quantity > 1
            ? item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
            : item
        )
      );
    }
  };
  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home user={user} setUser={setUser} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/bondoffer"
          element={
            <Bond user={user} setUser={setUser} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              user={user}
              setUser={setUser}
              cart={cart}
              setCart={setCart}
              updateCart={updateCart}
              removeCart={removeCart}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              user={user}
              setUser={setUser}
              cart={cart}
              setCart={setCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
