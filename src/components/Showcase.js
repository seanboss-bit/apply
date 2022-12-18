import React from "react";
import { ArrowRightIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

const Showcase = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="bg-stone-600 w-[40px] h-[20px]"></span>
        <span className="bg-green-700  w-[40px] h-[20px]"></span>
      </div>
      <div className="container mx-auto px-8 pt-5 my-5 md:flex">
        <div className="basis-[50%] flex flex-col items-center justify-center mb-20 md:justify-start md:items-start">
          <h1 className="text-5xl capitalize text-stone-600 mb-1 text-center md:text-left">
            subscribe to fGN
          </h1>
          <h1 className="text-5xl capitalize text-stone-600 mb-4">
            saving bond
          </h1>
          <p className="capitalize text-stone-600">
            loan and get paid with intrest
          </p>
          <div className="mt-20 flex items-center gap-2">
            <button className="flex bg-emerald-600 text-white capitalize px-8 items-center gap-1 py-2 rounded-md">
              get started
              <ArrowRightIcon className="h-4" />
            </button>
            <button className="flex text-stone-600 capitalize px-8 items-center gap-1 py-2 rounded-md">
              <PlayCircleIcon className="h-5" />
              see video
            </button>
          </div>
        </div>
        <div className="basis-4/5 relative ">
          <div className="irregular-border"></div>

          <img
            src="/images/Component 3.png"
            alt="#"
            className="absolute top-0 left-[0%] md:left-[-15%] h-[340px] md:h-[520px]"
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;
