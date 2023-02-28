import React from 'react';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="flex items-center justify-center  bg-[#171A21]">
      {/* left side */}
      <div className=" flex w-[940px] items-center justify-center py-3 px-3 lg:w-auto lg:justify-start lg:py-6 lg:px-14">
        <div className="lg:hidden">
          <FiMenu
            className="absolute left-[8px] top-[15px] text-[30px]
          text-white"
          />
        </div>
        <div className="flex items-center text-[20px] font-semibold tracking-widest text-white lg:text-[#C5C3C0]">
          <img src={logo} className="mr-[8px] w-[36px] " />
          <p className="">GAMICS</p>
        </div>
      </div>
      {/* middle side */}
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
    </div>
  );
}

export default Navbar;
