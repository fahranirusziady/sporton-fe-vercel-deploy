"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto py-7 flex justify-between items-center gap-10">
        
        {/* Logo */}
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        />

        {/* Navigation */}
        <nav className="flex gap-44 font-medium">
          <Link
            href="#"
            className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:h-[3px] after:w-6 after:rounded-full after:bg-primary"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>

        {/* Actions */}
        <div className="relative flex items-center gap-10">
          <FiSearch size={24} />

          {/* Cart Button */}
          <button
            type="button"
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen((prev) => !prev)}
          >
            <FiShoppingBag size={24} />
            <span className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </button>

          {/* Cart Popup */}
          {isCartPopupOpen && <CartPopup />}
        </div>

      </div>
    </header>
  );
};

export default Header;