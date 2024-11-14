import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from '../feature/newsSlice';
import useNewsData from '../customhook/useNewsData';

function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  const dispatch = useDispatch();
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  const [selectedCategory, setSelectedCategory] = useState(categories[2]);

  
  const { list } = useNewsData(selectedCategory);

  
  useEffect(() => {
    if (list && list.length > 0) {
      dispatch(getList({ list }));
      
    }
  }, [list, dispatch]);

  
  const handleClick = (category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-20 bg-white flex h-[4.5rem] items-center px-3 py-2"
      style={{ boxShadow: "0 2px 8px 1px rgba(0, 0, 0, 0.21)" }}
    >
      <div 
        className="flex flex-row h-full p-1 items-center cursor-pointer text-black hover:text-slate-500" 
        onClick={() => setshowmenu(!showmenu)}
      >
        <img
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="hamimg"
          className="h-[4rem] w-[4rem]"
        />
        <p className="text-[1rem]">Menu</p>
      </div>

      <h1 className="text-[2rem] font-semibold flex-1 text-center text-slate-600">News App</h1>

      <div
        className={`fixed top-0 left-0 h-full z-10 transition-transform duration-300 ease-in-out flex  
          ${showmenu ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
      >
        <div className="w-[60vw] sm:w-[30vw] md:w-[20vw] bg-[#353A3A] text-ivory p-8">
          <p className="text-gray-400 font-light">Categories</p>
          <div className="flex flex-col gap-6 mt-6 text-[ivory] justify-center items-start">
            {categories.map((item) => (
              <button 
                onClick={() => handleClick(item)} 
                key={item} 
                className={`text-lg capitalize hover:text-yellow-300  ${
                  item === selectedCategory ? 'text-yellow-300 underline underline-offset-8' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {showmenu && 
          <button 
            className="absolute top-4 left-[48vw] sm:left-[31vw] md:left-[21vw] 
            text-[1rem] px-3 py-1 rounded-md z-20 transition-opacity duration-300 flex gap-1 justify-center items-center hover:text-slate-500"
            onClick={() => setshowmenu(false)}
          > 
            <p className="text-[1.5rem] sm:text-black sm:hover:text-slate-500 text-[ivory] hover:text-yellow-400">&#10006;</p>
            <p className="hidden sm:block">Close</p>
          </button>
        }
      </div>
    </div>
  );
}

export default Navbar;
