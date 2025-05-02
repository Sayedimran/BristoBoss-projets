import React from "react";

const Navber = () => {
  return (
    <div className="navbar fixed z-10 opacity-30 bg-black text-white px-4 md:px-8 py-3">
      {/* Left side: Logo */}
      <div className="flex-1">
        <a className="text-xl md:text-2xl font-bold">
          BISTRO BOSS <br className="hidden md:block" />
          <span className="text-sm font-light tracking-widest">RESTAURANT</span>
        </a>
      </div>

      {/* Mobile Dropdown (Daisy UI Dropdown) */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <a href="/" className="text-yellow-600 font-semibold">
                HOME
              </a>
            </li>
            <li>
              <a href="/contact">CONTACT US</a>
            </li>
            <li>
              <a href="/dashboard">DASHBOARD</a>
            </li>
            <li>
              <a href="/menu">OUR MENU</a>
            </li>
            <li>
              <a href="/shop">OUR SHOP</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="/" className="text-yellow-400 font-semibold">
          HOME
        </a>
        <a href="/contact" className="hover:text-yellow-400">
          CONTACT US
        </a>
        <a href="/dashboard" className="hover:text-yellow-400">
          DASHBOARD
        </a>
        <a href="/menu" className="hover:text-yellow-400">
          OUR MENU
        </a>
        <a href="/shop" className="hover:text-yellow-400">
          OUR SHOP
        </a>
      </div>
    </div>
  );
};

export default Navber;
