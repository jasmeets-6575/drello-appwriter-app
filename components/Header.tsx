"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-50 rounded-b-2xl ">
        <Image
          src={logo}
          alt="trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb:0 object-contain"
        />

        <div className="w-full flex items-center space-x-5 flex-1 justify-end">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* <Avatar name="Jasmeet Singh" round={true} color="#0055D1" size="50" /> */}
        </div>

        <div className="flex items-center justify-center px-5 md:py-5">
          <p className=" flex items-center text-sm font-light shadow-xl rounded-xl p-5 w-fit bg-white italic max-w-3xl text-[#0055D1]">
            <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
            GPT is summarising your task for the day
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
