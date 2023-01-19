import React from "react";

const CheckoutCard = ({ countBuy, setCountBuy }) => {
  return (
    <div className="mt-5 w-full h-full">
      <div className="flex justify-between px-5 border border-b-slate-300 py-2 rounded-md">
        <button
          className="text-xl w-10"
          onClick={() => setCountBuy(countBuy + 1)}
        >
          <span>+</span>
        </button>
        <p>{countBuy}</p>
        <button
          className="text-xl w-10"
          onClick={() => setCountBuy(countBuy - 1)}
        >
          <span>-</span>
        </button>
      </div>
      <div className="flex justify-end mt-1">
        <button className="bg-myPrimary shadow-lg drop-shadow-lg shadow-gray-50 p-3 font-semibold rounded-2xl hover:shadow-black hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
