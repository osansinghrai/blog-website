import Sidebar from "@/components/AdminComponent/Sidebar";
import Image from "next/image";
import { assets } from "@/public/Assets/assets";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black ">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} alt="profile" width={40} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
