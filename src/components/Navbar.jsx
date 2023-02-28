import React from 'react';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="flex items-center justify-center  bg-[#171A21]">
      {/* left side */}
      <div className=" relative flex w-[940px] items-center justify-center py-3  px-3 lg:w-auto lg:min-w-[940px] lg:justify-start lg:py-8 ">
        {/*  */}
        <div className="">
          <div className="lg:hidden">
            <FiMenu
              className="absolute left-[8px] top-[15px] text-[30px]
          text-white"
            />
          </div>
          <div className=" flex items-center text-[20px] font-semibold tracking-widest text-white lg:pr-[70px] lg:text-[#C5C3C0]">
            <img src={logo} className="mr-[8px] w-[36px] " />
            <p className="">GAMICS</p>
          </div>
        </div>
        {/*  */}
        <div className=" hidden lg:flex">
          <ul className="flex gap-5 text-[13px] text-[#C5C3C0]">
            <li>
              <p>STORE</p>
            </li>
            <li>
              <p>COMMUNITY</p>
            </li>
            <li>
              <p>ABOUT</p>
            </li>
            <li>
              <p>SUPPORT</p>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className=" absolute top-0 right-0 hidden items-center gap-2 pt-[7px] text-[11px] text-[#C5C3C0] lg:flex">
          <button className="flex items-center gap-1 bg-[#5C7E10]  px-[11px] py-[4px] text-[12px] text-[#e5e4dc] ">
            <FaDownload />
            <p className="hover:text-white">Install Steam</p>
          </button>
          <p>login</p>
          <p>|</p>
          <p>language</p>
        </div>
      </div>
      {/* middle side */}

      {/* right side */}
    </div>
  );
}

export default Navbar;
