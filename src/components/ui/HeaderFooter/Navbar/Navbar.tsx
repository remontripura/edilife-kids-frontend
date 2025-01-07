"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MainContainer from "@/components/shared/Container/MainContainer";
import { images, menuItems } from "@/components/store";
import Responsive from "./Responsive";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full shadow">
      {/* Desktop Navbar */}
      <MainContainer>
        <div className="hidden md:flex justify-between items-center py-2 px-4">
          <div>
            <Link href="/">
              <Image
                className="w-[180px]"
                src={images.logo}
                alt="Logo"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-6 items-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm md:text-lg font-semibold relative group ${
                    pathname === item.pathname ? "text-primary" : "text-black"
                  }`}
                >
                  <Link
                    href={item.pathname}
                    className="transition-colors duration-300"
                  >
                    {item.item}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-black transform ${
                      pathname === item.pathname ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/about#admission">
            <button
              className="hero-button"
            >
              Get Admission
            </button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <Responsive toggle={toggle} handleToggle={handleToggle} />
      </MainContainer>
    </div>
  );
};

export default Navbar;
