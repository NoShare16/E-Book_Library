"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white bg-black">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src={"/neuralNetwork.jpeg"}
            alt="logo"
            width={55}
            height={40}
          />
        </Link>

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue !font-bold">
            <a href="https://www.alex-wirschke.com/" target="_blank">
              My Portfolio
            </a>
          </li>
          <li className="body-text !font-normal">
            <a href="https://github.com/NoShare16" target="_blank">
              GitHub Profile
            </a>
          </li>
        </ul>

        <Image
          src={"/hamburger-menu.svg"}
          width={30}
          height={30}
          alt="Menu"
          className="block md:hidden"
          onClick={() => setToggleDropdown((prev) => !prev)}
        />

        {toggleDropdown && (
          <div className="absolute right-0 top-full mt-3 p-5 rounded-lg bg-gray-300 min-w-[210px] flex flex-col gap-2 justify-center items-center md:hidden">
            <ul className="py-2 text-sm text-gray-700 ">
              <li>
                <a
                  href="https://www.alex-wirschke.com/"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100 body-text !font-bold hover:rounded"
                >
                  My Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NoShare16"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-100 body-text !font-normal hover:rounded"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
