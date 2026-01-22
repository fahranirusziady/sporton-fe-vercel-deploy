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
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({ product, stock }: TProductActionsProps) => {
  const { addItem } = useCartStore();
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleCheckout = () => {
    addItem(product);
    push("/checkout");
  };

  return (
    <div className="flex gap-5 items-center">
      {/* Quantity */}
      <div className="border border-gray-500 inline-flex w-fit min-w-[82px]">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center px-4">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col w-10">
          <button
            className="h-7 border-b border-gray-500 flex items-center justify-center"
            onClick={() =>
              setQty((prev) => (prev < stock ? prev + 1 : prev))
            }
          >
            <FiChevronUp size={16} />
          </button>

          <button
            className="h-7 flex items-center justify-center"
            onClick={() =>
              setQty((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <Button
        className="h-14 flex items-center gap-3"
        onClick={handleAddToCart}
      >
        <FiShoppingBag />
        Add to Cart
      </Button>

      {/* Checkout */}
      <Button variant="dark" className="h-14" onClick={handleCheckout}>
        Checkout
        <FiArrowRight />
      </Button>
    </div>
  );
};

export default ProductActions;