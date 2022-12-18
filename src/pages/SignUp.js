import React from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";

const SignUp = ({ user, setUser, cart }) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} cart={cart} />
      <SignUpForm />
    </>
  );
};

export default SignUp;
