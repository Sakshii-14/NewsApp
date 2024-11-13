import React, { useState } from 'react';

function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  const categories = [
    'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
  ];

  return (
    <div
      className="flex h-[4.5rem] items-center px-3 py-2 "
      style={{ boxShadow: "0 2px 8px 1px rgba(0, 0, 0, 0.21)" }}
    >
      <div className="flex flex-row h-full p-1 items-center cursor-pointer" onClick={() => setshowmenu(!showmenu)}>
        <img
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="hamimg"
          className="h-[4rem] w-[4rem]"
        />
        <p className="text-[1rem]">Menu</p>
      </div>

      <h1 className="text-[2rem] font-semibold flex-1 text-center text-slate-600">News App</h1>

      
      {showmenu && (
        <div className="fixed top-0 left-0 h-full w-[60vw] sm:w-[30vw] bg-gray-800 text-ivory p-6 z-10">
          <button className="text-white" onClick={() => setshowmenu(false)}>Close</button>
          <div className="flex flex-col gap-6 mt-6 text-[ivory]">
            {categories.map((item) => (
              <p key={item} className="text-lg capitalize">{item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
