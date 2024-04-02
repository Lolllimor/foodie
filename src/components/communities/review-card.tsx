import { Like1 } from "iconsax-react";
import { CiShare2 } from "react-icons/ci";

export const ReviewCard = ({
  food,
  name,
  paragraph,
  src,
}: {
  food: string;
  name: string;
  paragraph: string;
  src: string;
}) => {
  return (
    <div className="h-fit pt-[20px] px-[30px] pb-[20px] w-[575px] gap-[15px] flex flex-col border border-[#f0f0f0] rounded-2xl">
      <div className="flex gap-[20px] items-center">
        <div className="w-[50px] h-[50px] bg-sky-50 rounded-full"></div>
        <div className=" flex flex-col gap-[2px]">
          <p className="font-[600] text-[20px]">{food}</p>
          <p className="text-[16px]">{name}</p>
        </div>
      </div>
      <div className="flex gap-[2px]">
        <img src="/images/star.svg" height={20} width={20} />
        <img src="/images/star.svg" height={20} width={20} />
        <img src="/images/star.svg" height={20} width={20} />
        <img src="/images/star.svg" height={20} width={20} />
        <img src="/images/star.svg" height={20} width={20} />
      </div>
      <p className="text-[#000] text-[14px] w-[80%]">{paragraph}</p>
      <div
        className="h-[254px] w-[507px] bg-[url('/images/spag.svg')] bg-contain rounded-2xl"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="gap-[20px] flex">
        <div className="flex gap-[5px] items-center">
          <Like1 size="16" color="#000" /> <p>3</p>
        </div>
        <div className="flex gap-[5px] items-center">
          <CiShare2 size="18" color="#000" /> <p>Share</p>
        </div>
      </div>
    </div>
  );
};
