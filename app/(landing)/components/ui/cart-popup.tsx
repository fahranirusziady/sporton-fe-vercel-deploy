"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  console.log("Cart Item",items)

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="absolute right-0 top-12 w-[320px] bg-white shadow-xl shadow-black/10 border border-gray-200 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>

      {items.length === 0 && (
        <div className="p-4 text-sm text-gray-500 text-center opacity-50">
        Your Shopping Cart is Empty
        </div>
      )}

      {items.map((item) => (
        <div
          key={item._id}
          className="border-b border-gray-200 p-4 flex gap-4"
        >
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={getImageUrl(item.imageUrl)}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>

          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">
                {priceFormatter(item.price)}
              </div>
            </div>
          </div>

          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 !p-0 self-center ml-auto"
            onClick={() => removeItem(item._id)}
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
      </div>

      <Button
        variant="dark"
        size="small"
        className="w-full flex items-center justify-center gap-2"
        onClick={handleCheckout}
      >
        Checkout Now <FiArrowRight />
      </Button>
    </div>
  );
};

export default CartPopup;