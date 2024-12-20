"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CiSettings, CiShoppingCart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { usePathname } from "next/navigation"; // Use usePathname for route detection

const Navbar = ({
  bgColor = "bg-bgColor",
  boxShadow,
}: {
  bgColor: string;
  boxShadow?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`px-3 lg:px-24 flexBetween py-10 ${bgColor} ${boxShadow} z-[999] flex-shrink-0 w-full h-[10vh] fixed top-0 left-0 right-0 mb-1`}
    >
      <Link
        href="/"
        className="bg-white size-12 flex justify-center items-center rounded-lg"
      >
        <Image
          src="/images/fullsnack.png"
          width={50}
          height={29}
          alt="fullsnackdev"
        />
      </Link>
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`uppercase text-[13px] ${
              pathname === link.href
                ? "text-white"
                : "text-gray-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="flex gap-3">
        <div className="bg-slate-200 hover:bg-baseColor transition-all duration-300 h-[36px] w-[36px] cursor-pointer rounded-full flex justify-center items-center text-baseColor hover:text-white">
          <CiSettings className="font-semibold" size={24} />
        </div>
        <div className="bg-baseColor transition duration-300 h-[36px] w-[36px] cursor-pointer rounded-full flex justify-center items-center text-white hover:bg-basehover">
          <Link
            href="http://shop.thefullsnackdevs.com/"
            passHref
            legacyBehavior
          >
            <a
              href="http://shop.thefullsnackdevs.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiShoppingCart className="font-semibold" size={24} />
            </a>
          </Link>
        </div>
        <div className="lg:hidden flex cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <IoIosClose
              size={36}
              className={`transform transition-transform duration-300 text-white ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          ) : (
            <CgMenuLeft
              size={36}
              className={`transform transition-transform duration-300 text-white ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          )}
        </div>
      </div>

      <div
        ref={menu}
        className= {`lg:hidden absolute top-[100%] left-0 w-full bg-[#202942] overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-5">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`uppercase flexCenter regular-16 py-2 w-full text-center ${
                pathname === link.href
                  ? "text-white"
                  : "text-gray-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
