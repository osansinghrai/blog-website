import Image from "next/image";
import React from "react";
import { assets, blog_data } from "@/public/Assets/assets";

interface BlogitemProps {
  title: string;
  description: string;
  category: string;
  image: any;
}
const Blogitem = ({ title, description, category, image }: BlogitemProps) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-2px_1px_6px_#000000]">
      <Image
        src={image}
        alt="blog-data"
        width={400}
        height={400}
        className="border-b border-black"
      />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight">
          {description}
        </p>
        <div className="inline-flex items-center py-2 font-semibold text-center">
          Read More
          <Image src={assets.arrow} className="ml-2" alt="arrow" width={12} />
        </div>
      </div>
    </div>
  );
};

export default Blogitem;
