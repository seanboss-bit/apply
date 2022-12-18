import React from "react";
import Writing from "./Writing";
import { HeartIcon } from "@heroicons/react/24/outline";

const Item = ({ mark, setCart, cart }) => {
 
  const addCart = (sean) => {
    setCart([...cart, sean]);
  };
  return (
    <div className="border border-green-500 mx-3 py-3 md:px-5 rounded-md px-3">
      <div className="flex items-center justify-between">
        <div className="w-[50px] h-[50px] ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_Nigeria.svg/800px-Coat_of_arms_of_Nigeria.svg.png"
            alt="#"
          />
        </div>
        <p className="text-stone-600 bg-green-300 rounded py-1 px-2 capitalize">
          FGN savings bond
        </p>
      </div>
      <h1 className="text-center text-2xl font-medium mt-4 capitalize">
        {mark.name}
      </h1>
      <p className="text-center text-sm capitalize text-stone-600 mb-7">
        {mark.due}
      </p>
      <Writing heading="minimum" otherText="NGN 5,000" />
      <Writing heading="%per year" otherText="11.382%" />
      <Writing heading="interest payment" otherText="quaterly" />
      <Writing heading="opening" otherText="oct/4/2022" />
      <Writing heading="closing" otherText="oct/7/2022" />
      <Writing heading="settlement" otherText="oct/12/2022" />

      <div className="mt-8 mb-5 flex items-center justify-center gap-2">
        <button
          onClick={() => addCart(mark)}
          className="bg-green-700 text-white py-2 px-4 capitalize rounded"
        >
          add to cart
        </button>
        <HeartIcon className="h-8" />
      </div>
    </div>
  );
};

export default Item;
