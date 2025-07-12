"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { assets } from "@/public/asset/assets";
import Link from "next/link";
import Footer from "@/Components/Footer";
import axios from "axios";

const page = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              alt="logo"
              width={3000}
              className="mx-5 w-30 sm:w-40 md:w-45"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium cursor-pointer py-1 px-3 sm:py-3 sm:px-6 border-1 border-black shadow-[-6px_6px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24 ">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {(data as any).title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full object-cover w-[100px] h-[100px]"
            src={(data as any).author_img}
            alt="authorImg"
            width={60}
            height={60}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {(data as any).author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={(data as any).image}
          alt="image"
          width={1280}
          height={720}
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: (data as any).description }}
        ></div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-3 w-[150px]">
            <Link href="https://www.facebook.com/" target="_blank">
              <Image
                src={assets.facebook_icon}
                alt="facebook_icon"
                width={50}
              />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image
                src={assets.instagram_icon}
                alt="twitter_icon"
                width={50}
              />
            </Link>
            <Link href="https://www.threads.net/?hl=en" target="_blank">
              <Image
                src={assets.threads_icon}
                alt="googleplus_icon"
                width={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
