"use client";

import {
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const {push} = useRouter();
  const [qty, setQty] = useState(1);

  const Checkout =() => {

  }

  const incrementQty = () => {
    setQty(prev => prev + 1);
  };

  const decrementQty = () => {
    setQty(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] gap-6 w-full items-center">

      {/* Quantity */}
      <div className="border border-gray-500 flex h-14 min-w-[72px]">
        <div className="w-14 text-xl font-medium border-r border-gray-300 flex justify-center items-center">
          <span>{qty}</span>
        </div>

        <div className="flex flex-col w-10">
          <button
            className="h-7 border-b border-gray-500 cursor-pointer flex items-center justify-center"
            onClick={incrementQty}
          >
            <FiChevronUp size={16} />
          </button>

          <button
            className={`h-7 flex items-center justify-center ${
              qty === 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={decrementQty}
            disabled={qty === 1}
          >
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <Button className="w-full h-14 flex items-center justify-center gap-3 text-base font-medium rounded-md">
        <FiShoppingBag size={20} />
        Add to Cart
      </Button>

      {/* Checkout */}
      <Button
        variant="dark"
        className="w-full h-14 flex items-center justify-center gap-3 text-base font-medium rounded-md" onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={20} />
      </Button>

    </div>
  );
};

export default ProductActions;