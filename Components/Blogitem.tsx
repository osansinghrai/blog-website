import Image from "next/image";
import React from "react";
import { assets} from "@/public/assets/assets";
import Link from "next/link";

interface BlogitemProps {
  title: string;
  description: string;
  category: string;
  image: any;
  id: any;
}
const Blogitem = ({ title, description, category, image, id }: BlogitemProps) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-2px_1px_6px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="blog-data"
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
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
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
          Read More
          <Image src={assets.arrow} className="ml-2" alt="arrow" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;
