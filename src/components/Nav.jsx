import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Nav = () => {
  return (
    <>
      <div className="w-full h-[100px] flex justify-between items-center px-8">
        <div className="w-[60px] h-[60px] p-5 bg-white flex justify-center items-center rounded-md shadow-xl">
          <MdFastfood className="w-[30px] h-[30px] text-orange-400" />
        </div>
        <form className="w-[60%] h-[60px] bg-white flex items-center px-5 gap-5">
          <IoSearch className="text-[20px] text-orange-500 w-[20px]" />
          <input
            type="text"
            placeholder="Search Items..."
            className="w-[100%] outline-none text-[20px]"
          />
        </form>

        <div className="w-[60px] h-[60px] p-5 bg-white flex justify-center items-center rounded-md shadow-xl">
          <FiShoppingBag className="w-[30px] h-[30px] text-orange-400" />
        </div>
      </div>
    </>
  );
};

export default Nav;
