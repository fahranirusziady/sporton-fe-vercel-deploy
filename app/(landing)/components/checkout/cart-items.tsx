import Image from "next/image";
import { FiTrash2, FiArrowRight, FiCreditCard } from "react-icons/fi";

import { cartList } from "../ui/cart-popup";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formatter";
import CardWithHeader from "../ui/card-with-header";

function CartItems() {
  // ✅ hitung total harga
  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CardWithHeader title="Cart Items">
       {/* Items */}
      <div className="overflow-auto max-h-[300px] divide-y divide-gray-200">
        {cartList.map((item, index) => (
          <div key={index} className="p-4 flex gap-4 items-center">
            {/* Product Image */}
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center rounded">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <span>{item.qty}x</span>
                <span className="text-primary">
                  {priceFormatter(item.price)}
                </span>
              </div>
            </div>

            {/* Remove Button */}
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0 ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 space-y-4">
        <div className="flex justify-between font-semibold">
          <span className="text-sm">Total</span>
          <span className="text-primary text-sm">
            {priceFormatter(totalPrice)}
          </span>
        </div>

        <Button
          variant="dark"
          className="w-full flex items-center justify-center gap-2"
        ><FiCreditCard /> Proceed to Payment </Button>
      </div>
    </CardWithHeader>
  );
}

export default CartItems;