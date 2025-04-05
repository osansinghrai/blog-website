import Image from "next/image";
import React from "react";
import { assets } from "@/public/assets/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-around flex-column gap-3 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image
        src={assets.logo}
        alt="logo_light"
        width={120}
        className="invert w-40"
      />
      <p className="text-white">All right reserved. Copyright @leoss</p>
      <div className="flex gap gap-4 w-[160px]">
        <Link href="https://www.facebook.com/" target="_blank">
          <Image src={assets.facebook_icon} alt="facebook" width={50} />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <Image src={assets.instagram_icon} alt="instagram" width={50} />
        </Link>
        <Link href="https://www.threads.net/?hl=en" target="_blank">
          <Image src={assets.threads_icon} alt="threads" width={50} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
