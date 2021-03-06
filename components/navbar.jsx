import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="py-0.5 shadow-md bg-[#ec3b37]">
      <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center ">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
              xmlns="https://image.similarpng.com/very-thumbnail/2020/07/Flat-logo-google-play-icon-Vector-PNG.png"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg> */}
            <img
              src="/01.png"
              className="h-11 text-white  w-50 rounded-ful0ll"
            />
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        {/* <button
          className="inline-flex items-center bg-gray-100  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0
            border-2 border-gray-300
        "
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
