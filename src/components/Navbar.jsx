import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-3xl font-bold">
              Shape<span className="text-yellow-500">.</span>
            </span>
          </a>

        
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Service
            </a>

            <a className="mr-5 hover:text-gray-900 cursor-pointer">
             Work
            </a>

            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              About
            </a>

            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Blog
            </a>

            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Contact
            </a>
          </nav>

    
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-filled/50/do-not-disturb-2.png"
            alt="mode"
            className="mr-4"
          />

    
          <button className="inline-flex items-center bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-400 rounded-full text-base mt-4 md:mt-0">
            Start a Project

            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

        </div>
      </header>
    </>
  );
};

export default Navbar;