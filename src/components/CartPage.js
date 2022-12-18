import React from "react";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const CartPage = ({ cart, updateCart, removeCart }) => {
  let total = 0;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  return (
    <div className="max-w-[1240px] px-8 mx-auto">
      {cart.length > 0 ? (
        cart?.map((item, index) => (
          <div
            className="flex md:flex-row items-center  border border-green-600 my-5 px-3 py-2"
            key={index}
          >
            <input
              type="checkbox"
              className="text-green-700 w-5 h-5 md:basis-[6%] basis-[20%]"
              defaultChecked
            />
            <div className=" basis-[80%] md:basis-[94%] flex md:flex-row flex-col iitems-center md:justify-between justify-center">
              <div className="flex md:flex-row flex-col items-center justify-between md:gap-20">
                <div className="w-[70px] h-[70px] ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_Nigeria.svg/800px-Coat_of_arms_of_Nigeria.svg.png"
                    alt="#"
                  />
                </div>
                <h1 className="font-bold capitalize text-xl">{item.name}</h1>
                <div className="flex items-center justify-center my-3 md:my-0">
                  <button className="text-green-600 border border-green-600 md:mx-5 mr-5 capitalize px-4 py-2">
                    automatic
                  </button>
                  <button
                    className="capitalize text-red-600"
                    onClick={() => removeCart(item.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
              <div>
                <p className="capitalize text-stone-600 text-center md:text-left">
                  value(N)
                </p>
                <div className="flex items-center justify-between gap-3 border border-green-600 px-3 py-1">
                  {numberWithCommas(item.price * item.quantity)}{" "}
                  <MinusCircleIcon
                    className="h-5"
                    onClick={() => updateCart(item.id, "l")}
                  />{" "}
                  {item.quantity}
                  <PlusCircleIcon
                    className="h-5"
                    onClick={() => updateCart(item.id, "r")}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="py-5 text-center">NO ITEMS IN CART</p>
      )}
      <div className="border border-green-600 flex md:flex-row flex-col items-start justify-between md:pl-20 pl-6 py-4 pr-5 gap-8 md:gap-0">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-20">
            <p className="flex items-center gap-2 capitalize text-stone-600">
              fees
              <PlusIcon className="h-3" />
              taxes
            </p>
            <p>N 2.09</p>
          </div>
          <p className="capitalize max-w-sm text-stone-600">
            this is a 730 days savings bond, you have a fixed income
          </p>
        </div>
        <div>
          <p className="capitalize text-xs md:text-right">total buy</p>
          <h1 className="text-2xl font-bold">NGN {numberWithCommas(total)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
