import { Like } from "iconsax-react";

export const Cards = () => {
  return (
    <div className="bg-white  p-[10px] w-[222px] rounded-xl">
      <div className="p-[16px] bg-[#F1F3F7] h-[60%] rounded-xl flex flex-col gap-[10px] pb-[4px]">
        <div className="flex gap-[2px]">
          <img src="/images/star.svg" height={14} width={14} />
          <img src="/images/star.svg" height={14} width={14} />
          <img src="/images/star.svg" height={14} width={14} />
          <img src="/images/star.svg" height={14} width={14} />
          <img src="/images/star.svg" height={14} width={14} />
        </div>
        <p className="text-black">
          “I've discovered a treasure trove of meatless recipes that have made
          my meals”.
        </p>
      </div>
      <div className="flex items-center mt-[20px] justify-between">
        <div className="flex items-center gap-[10px] ">
          <div className="w-[30px] h-[30px] bg-purple-50 rounded-full"></div>
          <p className="text-[#000]">Sarah M.</p>
        </div>
        <Like size="20" color="#000" variant="Outline" />
      </div>
    </div>
  );
};
