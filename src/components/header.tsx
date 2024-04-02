import { Body, Navbar } from "./header-copm";

export const Header = () => {
  return (
    <div className="bg-[url('/images/Header.png')] w-full h-full px-[80px] pt-[60px]">
      <Navbar />
      <Body />
    </div>
  );
};