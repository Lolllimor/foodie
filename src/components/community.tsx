import { ReviewCard } from "./communities";

export const Community = () => {
  const data = [
    {
      name: "Lady Rudy",
      food: "Spaghetti Bolognesse",
      paragraph:
        "I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
      src: "/images/spag.svg",
    },
    {
      name: "Emily Rose",
      food: "Roasted Chicken",
      paragraph:
        "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow",
      src: "/images/chicken.svg",
    },
    {
      name: "Susan H",
      food: "Vegetable Pot Pie",
      paragraph:
        "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
      src: "/images/pie.svg",
    },
    {
      name: "Lilac Laura",
      food: "Fresh Garden Salad",
      paragraph:
        "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.",
      src: "/images/g-salad.svg",
    },
  ];

  return (
    <div className="py-[100px] flex flex-col items-center">
      <h1 className=" text-[42px] font-[700] text-[#000] mb-[50px]">
        From Our Community
      </h1>
      <div className="flex flex-wrap justify-center gap-[50px]">
        {data.map((item) => (
          <ReviewCard
            src={item.src}
            name={item.name}
            food={item.food}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
};
