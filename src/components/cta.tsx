import { Apple, GooglePlay } from "iconsax-react";
import React from "react";

export const CTA = () => {
  return (
    <div className="pt-[20px] pb-[100px] flex justify-center ">
      <div className="bg-[#046E1B] w-[1240px] rounded-2xl px-[50px] pt-[50px] pb-[50px] flex">
        <div className="w-[70%] flex flex-col gap-[20px]">
          <h2 className="text-white text-[32px] font-[700] w-[87%]">
            Embrace the joy of cooking with get it on your iPhone or Android
            Your kitchen adventure begins now!
          </h2>
          <div className="flex gap-[20px]">
            <button className="h-fit py-[5px] flex bg-[#F79F1A] items-center px-[10px]  rounded-2xl">
              <Apple size="32" color="#fff" variant="Bold" />
              <div>
                <p className="text-white text-[10px]">Download on the</p>
                <p className="font-[600] text-white text-[14px]">App Store</p>
              </div>
            </button>
            <button className="h-fit py-[5px] flex bg-[#F79F1A] items-center px-[10px]  rounded-2xl">
              <GooglePlay size="32" color="#fff" variant="Bold" />
              <div>
                <p className="text-white text-[10px]">Get it on</p>
                <p className="font-[600] text-white text-[14px]">Google Play</p>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[30%] ">
          <img src="/images/phone.svg" />
        </div>
      </div>
    </div>
  );
};
