import React from "react";

const SignUpForm = () => {
  return (
   <div className="relative">
    <img src="/images/image 2.png" alt="#"  className="absolute right-0"/>
    <img src="/images/image 1.png" alt="#" className="absolute bottom-0"/>
    <div className="max-w-[1240px] mx-auto px-8 flex flex-col justify-center items-center">
      <h1 className="capitalize text-5xl mb-4">signup</h1>
      <p className="text-base text-stone-600 capitalize">stop spending, start investing</p>
      <form>
        <div className="flex flex-col capitalize mb-7 md:mb-3">
          <label className="text-stone-600 font-xs mb-1"> first name</label>
          <input type="text" placeholder="Enter Your FirstName" className="bg-transparent border border-green-600 px-5 py-2"/>
        </div>
        <div className="flex flex-col capitalize mb-7 md:mb-3">
          <label className="text-stone-600 font-xs mb-1"> first name</label>
          <input type="text" placeholder="Enter Your FirstName" className="bg-transparent border border-green-600 px-5 py-2"/>
        </div>
        <div className="flex flex-col capitalize mb-7 md:mb-3">
          <label className="text-stone-600 font-xs mb-1"> first name</label>
          <input type="text" placeholder="Enter Your FirstName" className="bg-transparent border border-green-600 px-5 py-2"/>
        </div>
        <div className="flex flex-col capitalize mb-7 md:mb-3">
          <label className="text-stone-600 font-xs mb-1"> first name</label>
          <input type="text" placeholder="Enter Your FirstName" className="bg-transparent border border-green-600 px-5 py-2"/>
        </div>
        <div className="flex flex-col capitalize mb-7 md:mb-3">
          <label className="text-stone-600 font-xs mb-1"> first name</label>
          <input type="text" placeholder="Enter Your FirstName" className="bg-transparent border border-green-600 px-5 py-2"/>
        </div>
        <div className="flex items-center gap-2 capitalize">
          <input type="checkbox" defaultChecked />
          <p>
            by continuing , you agree to the <span className="text-green-600 underline">terms and condtions</span>
          </p>
        </div>
        <input type="submit" value="sign up" className="bg-black text-white w-full capitalize py-2 md:mt-2 rounded mt-6"/>
      </form>
    </div>
   </div>
  );
};

export default SignUpForm;
