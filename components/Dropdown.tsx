"use client";

import Image from "next/image";
import React, { useState } from "react";

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <>
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
    </>
  );
};

export default Dropdown;
