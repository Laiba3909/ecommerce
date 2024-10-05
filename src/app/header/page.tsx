"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../public/loogo.png";
import Link from "next/link";

export default function Header() {
 const phoneNumber = '923242288404';
 
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4  bg-black text-white">
      <div className="flex-shrink-0">
        <Image
          className="-ml-5"
          src={logo}
          alt="logo"
          priority={true}
          width={250}
          height={250}
        />
      </div>

      <nav className="hidden md:flex">
        <ul className="flex text-2xl m-0 gap-x-8">
          <li className="text-orange-500">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              Pages▾
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-black text-white rounded-md shadow-lg">
                <li className="p-2 hover:bg-blue-400">
                  <Link href="https://www.facebook.com/CharcoalBbqnGril/">
                    Fb
                  </Link>
                </li>
                <li className="p-2 hover:bg-pink-700">
                  <Link href="https://www.instagram.com/charcoalbbqgrill/?hl=en">
                    Insta
                  </Link>
                </li>
                <li className="p-2 hover:bg-orange-600">
                  <Link href="https://www.reddit.com/r/charcoal/">Reddit</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <Link href={`https://wa.me/${phoneNumber}`} passHref>
          <button className="bg-amber-400 min-w-40 h-10 rounded-md hidden md:flex">
            Book a Table
          </button>
          </Link>
        </ul>
      </nav>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-2xl focus:outline-none"
        >
          🍔
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-black w-full text-white shadow-lg z-10">
          <ul className="flex flex-col text-xl p-4">
            <li className="py-2 hover:bg-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link href="/about">About</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link href="/menu">Menu</Link>
            </li>
           
            <li className="relative py-2">
              <button onClick={toggleDropdown} className="focus:outline-none">
                Pages▾
              </button>
              {isDropdownOpen && (
                <ul className="bg-black text-white rounded-md shadow-lg mt-2">
                  <li className="p-2 hover:bg-blue-400">
                    <Link href="https://www.facebook.com/CharcoalBbqnGril/">
                      Fb
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-pink-700">
                    <Link href="https://www.instagram.com/charcoalbbqgrill/?hl=en">
                      Insta
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-orange-600">
                    <Link href="https://www.reddit.com/r/charcoal/">
                      Reddit
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="py-2">
            <Link href={`https://wa.me/${phoneNumber}`} passHref>
            <button className="bg-amber-400 w-full h-10 rounded-md">
            
            Book a Table
          </button>
    </Link>
             
            </li>
          </ul>
        </div>
      )}
      
    </header>
  );
}
