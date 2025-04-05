"use client";

import React, { useState, useEffect } from "react";
import { blog_data } from "@/public/assets/assets";
import { useParams } from "next/navigation";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i] as any);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href='/'>
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
            className="mx-auto mt-6 border border-white rounded-full"
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
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{(data as any).description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-reflection and Goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-reflection and Goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-reflection and Goal setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          fugiat. Aut quibusdam molestiae cumque nemo rerum dignissimos omnis
          molestias blanditiis veritatis sed. Expedita hic harum incidunt illum
          ipsam, magnam voluptates.
        </p>

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
