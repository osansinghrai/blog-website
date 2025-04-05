import React from "react";
import Image from "next/image";
import { assets } from "@/public/Assets/assets";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} alt="logo" width={120} />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black ">
        <div className="w-[50%] sm:w-[80%] absolute right-0 ">
          <Link
            href="/admin/addProduct"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-1px_1px_2px_#000000] transition-all duration-200 active:scale-99 active:shadow-none "
          >
            <Image src={assets.add_icon} alt="add" width={28} />
            <p>Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-1px_1px_2px_#000000] transition-all duration-200 active:scale-99 active:shadow-none "
          >
            <Image src={assets.blog_icon} alt="add" width={28} />
            <p>Blog lists</p>
          </Link>
          <Link
            href="/admin/subscription"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-1px_1px_2px_#000000] transition-all duration-200 active:scale-99 active:shadow-none "
          >
            <Image src={assets.email_icon} alt="add" width={28} />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
