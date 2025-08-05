import { Link, useLocation } from "react-router-dom";
import logo from "../assets/DevelopersBay.png";
import { useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-darkblue border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 lg:px-16 pt-8 pb-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10 mr-3" alt="Developers Bay Logo" />
          <span className="self-center text-white text-xl font-medium whitespace-nowrap">
            Developers Bay
          </span>
        </Link>
        <button
          onClick={() => setHidden(!hidden)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`}
        >
          <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-greyishblue md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-darkblue">
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                  isActive("/")
                    ? "text-lightblueheader"
                    : "text-white hover:text-lightblueheader"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                  isActive("/about")
                    ? "text-lightblueheader"
                    : "text-white hover:text-lightblueheader"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ${
                  isActive("/contact")
                    ? "text-lightblueheader"
                    : "text-white hover:text-lightblueheader"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://ayeshaiq.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 pl-3 pr-4 text-white hover:text-lightblueheader rounded md:bg-transparent md:p-0"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
