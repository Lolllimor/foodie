import { Profile, SearchNormal1 } from "iconsax-react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="/images/logo.svg" className="h-[29px] w-[140px]" />
      <div className="flex gap-[50px]">
        <span
          onClick={() => {}}
          className="cursor-pointer text-[18px] font-[600] text-black"
        >
          Home
        </span>
        <span
          onClick={() => {}}
          className="cursor-pointer text-[18px] font-[600] text-black"
        >
          Recipe
        </span>
        <span
          onClick={() => {}}
          className="cursor-pointer text-[18px] font-[600] text-black"
        >
          Community
        </span>
        <span
          onClick={() => {}}
          className="cursor-pointer text-[18px] font-[600] text-black"
        >
          About Us
        </span>
      </div>
      <div className="flex gap-[25px]">
        <SearchNormal1 size="20" color="#000" />
        <Profile size="20" color="#000" />
      </div>
    </div>
  );
};
