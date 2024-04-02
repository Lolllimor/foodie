export const AboutUs = () => {
  return (
    <div className="flex py-[100px] h-[767px]">
      <div className="bg-[url('/images/eggs.svg')] h-[567px] bg-cover flex bg-no-repeat w-full px-[100px]">
        <div className="w-[50%] ">
          <div className="bg-white h-[80px] w-[234px] rounded-2xl items-center justify-center mt-[60%] py-[10px] px-[20px]">
            <p className="text-[#046E1B] w-[183px] font-[600]">
              50+ Quick Food Recipes That Easy To Do!
            </p>
          </div>
        </div>
        <div className="w-[50%] flex items-center">
          <div className="bg-[url('/images/about-bread.svg')] bg-contain h-[431px] w-[578px] rounded-2xl flex flex-col bg-no-repeat p-[50px] gap-[25px]">
            <h3 className="text-[#000] text-[32px] font-[700]">About Us</h3>
            <p className="text-[18px] font-[600] text-[#000] w-[85%]">
              Our recipes are the heart and soul of our culinary community, and
              they reflect our commitment to providing you with memorable and
              delightful dining experiences.
            </p>
            <button className="bg-[#F79F1A] h-[43px] font-[600] w-fit px-[30px] rounded-xl text-white mt-[30px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
