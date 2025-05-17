"use client";

import Link from "next/link";
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Menu, X } from "lucide-react";

// Menu links
const NavLinks = ({ closeMobileMenu }: { closeMobileMenu?: () => void }) => (
  <>
    <NavItem href="/symptoms" label="SYMPTOMS" onClick={closeMobileMenu} />
    <NavItem
      href="/allergyVsIntolerance"
      label="ALLERGY vs INTOLERANCE"
      onClick={closeMobileMenu}
    />
    <NavItem href="/reviews" label="REVIEWS" onClick={closeMobileMenu} />
    <NavItem href="/faq" label="FAQS" onClick={closeMobileMenu} />
  </>
);

const NavItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <Link href={href} onClick={onClick} className="block py-2 hover:text-black">
    {label}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="relative flex items-center justify-between px-6 py-4 md:py-6 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
        <Link href="/" className="text-2xl font-bold lg:text-4xl">
          <span className="text-black">SUPPLY</span>
          <span className="text-yellow-400">life</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-600 text-sm">
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-black inline-flex items-center gap-1 cursor-pointer">
              OUR TESTS <span className="text-blue-500">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
                <NavItem href="/ourTests/option1" label="Option 1" />
                <NavItem href="/ourTests/option2" label="Option 2" />
              </div>
            )}
          </div>
          <NavLinks />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/getYourKit"
            className="bg-fuchsia-800 text-white px-6 py-2 rounded-full hover:bg-fuchsia-900 text-sm font-semibold"
          >
            GET YOUR KIT
          </Link>
          <FaShoppingBasket className="text-blue-500 text-xl cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-6 space-y-4 text-black text-sm">
          <div className="border-t pt-4 space-y-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              <span>OUR TESTS</span>
              <span className="text-blue-500">
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="ml-4 space-y-2">
                <NavItem
                  href="/ourTests/option1"
                  label="Option 1"
                  onClick={() => setIsOpen(false)}
                />
                <NavItem
                  href="/ourTests/option2"
                  label="Option 2"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            )}
            <NavLinks closeMobileMenu={() => setIsOpen(false)} />
            <div className="flex items-center gap-3 pt-4">
              <Link
                href="/getYourKit"
                onClick={() => setIsOpen(false)}
                className="bg-fuchsia-800 text-white px-4 py-2 rounded-full hover:bg-fuchsia-900"
              >
                GET YOUR KIT
              </Link>
              <FaShoppingBasket className="text-blue-500 text-3xl md:text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
