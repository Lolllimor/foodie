import { Clock, ProfileCircle } from "iconsax-react";
import { HiChartBar } from "react-icons/hi2";

export const RecipeSection = () => {
  const data = [
    { img: "/images/salad.svg", name: "Creamy Salad" },
    { img: "/images/tofu.svg", name: "Tofu Soup " },
    { img: "/images/potatoes.svg", name: "Crunchy Potatoes" },
  ];
  const data2 = [
    { img: "/images/mushroom.svg", name: "Mushroom Soup" },
    { img: "/images/pancake.svg", name: "Raspberry Pancake " },
    { img: "/images/beef.svg", name: "Beef Teriyaki" },
  ];

  return (
    <div className="flex py-[100px] bg-white px-[80px] gap-[50px] flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-[2px]">
          <h2 className="text-black text-[35px] font-[700]">
            Discover, Create, Share
          </h2>
          <p className="text-[#7F7D7D]">
            Check our most popular recipes of this week
          </p>
        </div>
        <button className="bg-[#F79F1A] h-[45px] font-[600] w-fit px-[30px] rounded-xl text-white">
          See All
        </button>
      </div>
      <div className="flex gap-[50px] flex-col">
        <div className="flex justify-between w-full gap-[20px] overflow-x-auto no-scrollbar">
          {data.map((item) => (
            <div className="bg-white w-[375px] min-w-[375px]">
              <div
                className={`h-[265px]  bg-no-repeat flex-col bg-cover flex justify-end rounded-t-2xl w-[100%]`}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="  bg-[#FFFFFF4D] pb-[20px] pt-[5px] px-[10px] w-full flex  justify-evenly items-center">
                  <div className="flex gap-[8px] items-center ">
                    <Clock size="16" color="#046E1B" variant="Bold" />
                    <p className="text-[#046E1B]">10 Mins</p>
                  </div>
                  <div className="flex gap-[8px] items-center ">
                    <ProfileCircle size="16" color="#046E1B" variant="Bold" />
                    <p className="text-[#046E1B]">2 Serving</p>
                  </div>
                  <div className="flex gap-[8px] items-center ">
                    <HiChartBar color="#046E1B" />
                    <p className="text-[#046E1B]">Easy</p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-[20px] pt-[10px] pb-[20px] drop-shadow-md rounded-b-2xl">
                <h3 className="font-[700] text-[40px] text-[#000] text-nowrap">
                  {item.name}
                </h3>
                <p className="text-[#F79F1A] underline-offset-2 underline">
                  View Recipe
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full gap-[20px] overflow-x-auto no-scrollbar">
          {data2.map((item) => (
            <div className="bg-white w-[435px]">
              <div
                className={`h-[265px]  bg-no-repeat flex-col bg-cover flex justify-end rounded-t-2xl w-[435px]`}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="  bg-[#FFFFFF4D] pb-[20px] pt-[5px] px-[10px] w-full flex  justify-evenly items-center">
                  <div className="flex gap-[8px] items-center ">
                    <Clock size="16" color="#046E1B" variant="Bold" />
                    <p className="text-[#046E1B]">25 Mins</p>
                  </div>
                  <div className="flex gap-[8px] items-center ">
                    <ProfileCircle size="16" color="#046E1B" variant="Bold" />
                    <p className="text-[#046E1B]">2 Serving</p>
                  </div>
                  <div className="flex gap-[8px] items-center ">
                    <HiChartBar color="#046E1B" />
                    <p className="text-[#046E1B]">Medium</p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-[20px] pt-[10px] pb-[20px] drop-shadow-md rounded-b-2xl">
                <h3 className="font-[700] text-[40px] text-[#000]">
                  {" "}
                  {item.name}
                </h3>
                <p className="text-[#F79F1A] underline-offset-2 underline">
                  View Recipe
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
