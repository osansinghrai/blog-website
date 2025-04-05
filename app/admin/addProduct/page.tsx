"use client";

import { assets } from "@/public/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [image, setImage] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={
              !image ? assets.upload_area : URL.createObjectURL(image as any)
            }
            alt="upload"
            width={140}
            height={70}
          />
        </label>
        <input onChange={handleChange} type="file" id="image" hidden required />
        <p className="text-xl mt-4">Blog title</p>
        <input
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />
      </form>
    </div>
  );
};
export default page;
