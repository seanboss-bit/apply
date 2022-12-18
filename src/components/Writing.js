import React from "react";

const Writing = ({ heading, otherText }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <h1 className="text-stone-600 capitalize text-sm">{heading}</h1>
      <p className="capitalize text-sm">{otherText}</p>
    </div>
  );
};

export default Writing;
