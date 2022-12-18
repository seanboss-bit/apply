import React from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";

const Home = ({user, setUser, cart}) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} cart={cart}/>
      <Showcase />
    </>
  );
};

export default Home;
