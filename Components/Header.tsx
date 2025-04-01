import Image from "next/image";
import React from "react";
import { assets } from "@/public/Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt="Logo"
          width={3000}
          className="mx-5 w-30 sm:w-40 md:w-45"
        />
        <button className="flex items-center gap-2 font-medium cursor-pointer py-1 px-3 sm:py-3 sm:px-6 border-1 border-solid border-black shadow-[-6px_6px_0px_#000000]">
          Get Started <Image src={assets.arrow} alt=" " />{" "}
        </button>
      </div>
      <div className="text-center my-8 ">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto sm:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum
          animi hic, temporibus in tempora maiores ipsam nisi qui incidunt
          facere labore maxime neque praesentium inventore magnam. Quo, odio ea!
        </p>
        <form
          action=""
          className="flex justify-between max-w-[550px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-1px_1px_4px_#000000]"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className=" border-l border-black py-4 px-4 sm:px-8 active:bg-gray-500 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
