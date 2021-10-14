import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

const subMenuItems = [
  {
    name: "Furniture",
    link: "/furniture",
  },
  {
    name: "Blinds",
    link: "/blinds",
  },
  {
    name: "Shutters",
    link: "/shutters",
  },
  {
    name: "Window Treatments",
    link: "/window-treatments",
  },
  {
    name: "Flooring",
    link: "/flooring",
  },
  {
    name: "Home Staging",
    link: "/home-staging",
  },
  {
    name: "Paint Specification",
    link: "/paint-specification",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      id="head"
      className="fixed w-full bg-white border-b border-gray-200 z-30"
    >
      <div
        id="mainHead"
        className="flex h-20 md:h-20 items-center max-w-screen-xl m-auto px-4"
      >
        <Link href="/">
          <a className="inline-block ">
            <img
              className="block h-12 md:h-14"
              src="/images/logo.svg"
              alt="Handyman Contractor logo"
            />
          </a>
        </Link>
        <div className="flex-1 text-right">
          <div className="hidden lg:inline-block">
            {menuItems.map((menuItem, index) => {
              return (
                <Link key={index} href={menuItem.link}>
                  <a className="text-lg pl-4 pr-4">{menuItem.name}</a>
                </Link>
              );
            })}
          </div>

          {/* <a className="pl-4 pr-4">About</a>
      <a className="pl-4 pr-4">Blog</a> */}
          <div className="hidden md:inline-block">
            <a href="tel:9517343070" className="pl-4 pr-4 font-bold text-lg">
              (951) 734-3070
            </a>
            <Link href="/contact">
              <a className="button button--teal">Contact</a>
            </Link>
          </div>

          <button
            mobile-nav-toggle=""
            onClick={() => setIsMenuOpen((state) => !state)}
            className={`mobile-nav__toggle-btn inline-block md:hidden ${
              isMenuOpen ? "is-active" : ""
            }`}
          >
            <span className="u-visibly-hidden">Menu</span>{" "}
            <div className="mobile-nav__toggle">
              <div className="mobile-nav__toggle-line line--1 bg-black"></div>{" "}
              <div className="mobile-nav__toggle-line line--2 bg-black"></div>{" "}
              <div className="mobile-nav__toggle-line line--3 bg-black"></div>{" "}
              <div className="mobile-nav__toggle-line line--4 bg-black"></div>
            </div>
          </button>
        </div>
      </div>
      {/* <div
        id="subHead"
        className="border-t border-b border-gray-300 px-4 hidden lg:block"
      >
        <div className="max-w-screen-xl m-auto grid grid-cols-7">
          {subMenuItems.map((subMenuItem, index) => {
            return (
              <div key={index} className="py-3 text-center">
                <a className="">{subMenuItem.name}</a>
              </div>
            );
          })}
        </div>
      </div> */}
      <div
        className={`fixed h-full w-full bg-white border-t border-gray-200 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-20">
          {menuItems.map((menuItem, index) => {
            return (
              <div
                key={index}
                className={`text-center mb-4 transition-all transform  duration-700 delay-0  ease-in-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <Link href={menuItem.link}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-heading font-bold text-3xl pl-4 pr-4`}
                  >
                    {menuItem.name}
                  </a>
                </Link>
              </div>
            );
          })}
          <div
            className={`text-center mb-4 transition-all transform  duration-700  ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <Link href="/contact">
              <a
                onClick={() => setIsMenuOpen(false)}
                className={`block font-heading font-bold text-3xl pl-4 pr-4 opacity-0 transition-all duration-600 delay-300 mb-8 ${
                  isMenuOpen && "opacity-100"
                }`}
              >
                Contact
              </a>
            </Link>
          </div>
          <div
            className={`text-center mb-4 transition-all transform duration-700 delay-200 ease-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <div className="text-center uppercase text-sm text-gray-700 mb-2">
              CONTACT INFO
            </div>
            <div className="text-center mb-2">
              <a
                href="tel:9517343070"
                className="block text-xl font-medium pl-4 pr-4"
              >
                (951) 734-3070
              </a>
            </div>
            <div className="text-center">
              <a
                href="mailto:contact@handymancontractor.com"
                className="block text-base font-medium pl-4 pr-4"
              >
                contact@handymancontractor.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
