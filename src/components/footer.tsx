import { TextInput } from "@mantine/core";

export const Footer = () => {
  return (
    <div className="bg-[url('/images/footer-bg.svg')] h-[429px] w-full px-[100px] py-[50px]">
      <img src="/images/logo.svg" className="mb-[50px]" height={29} />
      <div className="flex ">
        <div className="flex w-[50%] justify-start gap-[120px] ">
          <div>
            <h3 className="font-[700] text-[16px] mb-[15px]">Menu</h3>
            <div className="flex flex-col gap-[5px]">
              <p className="font-[600] text-[14px] text-[#046E1B]">Home</p>
              <p className="font-[600] text-[14px]">Recipe</p>
              <p className="font-[600] text-[14px]">Community</p>
              <p className="font-[600] text-[14px]">About Us</p>
            </div>
          </div>
          <div>
            <h3 className="font-[700] text-[16px]  mb-[15px]">Categories</h3>
            <div className="flex flex-col gap-[5px]">
              <p className="font-[600] text-[14px] ">Breakfast</p>
              <p className="font-[600] text-[14px] ">Lunch</p>
              <p className="font-[600] text-[14px] ">Dinner</p>
              <p className="font-[600] text-[14px] "> Dessert</p>
              <p className="font-[600] text-[14px] "> Drink</p>
            </div>
          </div>
          <div>
            <h3 className="font-[700] text-[16px]  mb-[15px]">Social</h3>
            <div className="flex flex-col gap-[5px]">
              <p className="font-[600] text-[14px] "> Instagram</p>
              <p className="font-[600] text-[14px] ">Twitter</p>
              <p className="font-[600] text-[14px] ">Youtube</p>
              <p className="font-[600] text-[14px] "> Facebook</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start w-[30%] flex-col gap-14 ">
          <h3 className="font-[700] text-[16px] mb-[15px]">
            Sign up for our newsletter
          </h3>
          <div className="flex border-b pb-[5px]">
            <TextInput className=" w-full" placeholder="Your email address" />
            <button className="bg-[#F79F1A] text-white  py-[5px] px-[10px]  rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
