import React from 'react';

function Navbar() {
  return (
    <div
      className="flex h-[4.5rem] items-center px-3 py-2 "
      style={{ boxShadow: "0 2px 8px 1px rgba(0, 0, 0, 0.21)" }}
    >
      <div className="flex flex-row h-full p-1 items-center">
        <img
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="hamimg"
          className="h-[4rem] w-[4rem]"
        />
        <p className="text-[1rem]">Menu</p>
      </div>
      
      <h1 className="text-[2rem] font-semibold flex-1 text-center text-slate-600">News App</h1>
    </div>
  );
}

export default Navbar;
