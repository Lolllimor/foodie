import { Cards } from ".";

export const Body = () => {
  return (
    <div className="flex justify-between">
      <div className="  justify-evenly flex flex-col w-[40%]">
        <div className=" flex flex-col gap-[30px]">
          <h2 className="w-[90%] text-[#000] text-[40px] font-[700]">
            Cooking Made Fun and Easy: Unleash Your Inner Chef
          </h2>
          <p className="text-[14px] font-thin text-[#7F7D7D] w-[80%]">
            Discover more than
            <span className="text-[#F79F1A]"> 10,000 recipes</span> in your hand
            with the best recipe. Help you to find the easiest way to cook.
          </p>
        </div>
        <button className="bg-[#F79F1A] h-[52px] font-[600] w-fit px-[20px] rounded-xl text-white">
          Explore Recipes
        </button>
      </div>

      <div className="relative w-[60%]">
        <img src="/images/header-food.svg" className="h-fit" />
        <div className="absolute top-[44%] right-[25%] ">
          <Cards />
        </div>
        <div className="absolute top-[60%] left-[2%] ">
          <Cards />
        </div>
      </div>
    </div>
  );
};
