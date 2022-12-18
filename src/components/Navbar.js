import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon as CartIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const Navbar = ({ user, setUser , cart}) => {
  const [nav, setNav] = useState(false);
  const [bold, setBold] = useState(false);
  const [signup, setSignup] = useState(false);
 
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/bondoffer") {
      setBold(true);
    }
    if (location.pathname === "/signup") {
      setSignup(true);
    }
  }, [location.pathname]);
  return (
    <div className="container mx-auto px-8 flex items-center justify-between relative z-20">
      <div className="w-[300px] h-[100px] object-contain flex items-center justify-center">
        <img src="./images/LOGO.png" alt="#" />
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:block">
          <Link
            to={"/bondoffer"}
            className={`capitalize mr-4 ${bold ? "font-bold" : ""}`}
          >
            bond offer
          </Link>
          <Link to={"/"} className="capitalize mr-4">
            {user ? "Portfolio" : "DMO"}
          </Link>
          <Link to={"/"} className="capitalize mr-2">
            {user ? "Notification" : "Features"}
          </Link>
        </div>
        {user ? (
          <UserIcon className="h-8 mx-8 hidden md:block" />
        ) : (
          <div className="hidden md:block">
            <button
              onClick={() => setUser(true)}
              className="border capitalize border-green-700 text-green-700 py-2 px-7 rounded-md mr-5"
            >
              login
            </button>
            {signup ? (
              ""
            ) : (
              <Link
                to="/signup"
                className=" capitalize bg-black text-white py-2 px-7 rounded-md mr-5"
              >
                Sign up
              </Link>
            )}
          </div>
        )}
        <div
          className={
            nav
              ? "fixed top-0 right-0 bg-emerald-300 h-full text-white py-5 px-5 transition-all duration-300 ease-in-out z-10"
              : "fixed top-0 right-[-100%] bg-emerald-300 h-full text-white py-5 px-5 transition-all duration-300 ease-in-out md:right-0 md:relative md:hidden z-10"
          }
        >
          <div className="flex justify-end mb-3">
            <XMarkIcon
              className="h-9 md:hidden"
              onClick={() => setNav(false)}
            />
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Link
              to={"/bondoffer"}
              className={`capitalize mr-4 ${bold ? "font-bold" : ""}`}
            >
              bond offer
            </Link>
            <Link to={"/"} className="capitalize mr-4">
              {user ? "Portfolio" : "DMO"}
            </Link>
            <Link to={"/"} className="capitalize mr-2">
              {user ? "Notification" : "Features"}
            </Link>
          </div>
          {user ? (
            <UserIcon className="h-8 my-8" />
          ) : (
            <div className="flex flex-col gap-3 mt-10 md:block">
              <button
                onClick={() => setUser(true)}
                className="border capitalize border-green-700 text-green-700 py-2 px-7 rounded-md mr-5"
              >
                login
              </button>
              {signup ? (
                ""
              ) : (
                <Link
                  to="/signup"
                  className=" capitalize bg-black text-white py-2 px-7 rounded-md mr-5"
                >
                  Sign up
                </Link>
              )}
            </div>
          )}
        </div>
        <Link to="/cart" className="relative z-[2]">
          <CartIcon className="h-8" />
          {cart?.length > 0 ? (
            <span className="bg-red-600 rounded-full h-5 w-5 absolute top-[-20%] right-[-20%] text-white flex items-center justify-center">
              {cart?.length}
            </span>
          ) : null}
        </Link>
        <Bars3Icon className="h-8 md:hidden" onClick={() => setNav(true)} />
      </div>
    </div>
  );
};

export default Navbar;
