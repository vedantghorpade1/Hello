import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
order: -1,
heading: "Elite Fitness Training for",
highliteText: "Everyone, Everywhere",
description:
  "City Gym partners with top trainers and integrates smart fitness technology to deliver flexible, goal-oriented, and motivating workout experiences for individuals across all fitness levels.",
BtnText: "Join Now",
BtnLink: "/",

  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
heading: "Training Programs Designed for Real Results",
description:
  "Save time and train smarter! City Gym's programs are crafted by fitness experts to be easy to follow, highly effective, and tailored to real-world fitness goals.",

  },
  {
   order: 3,
heading: "Certified Excellence",
description:
  "City Gym offers expert-led programs and certified training plans to ensure every member receives trusted, results-driven fitness guidance recognized across the industry.",

  },
  {
    order: 4,
heading: `Progress Tracking "Auto-Analytics"`,
description:
  "City Gym integrates smart fitness technology to automatically track your workouts, monitor progress, and provide real-time feedback — helping you train smarter every day.",

  },
  {
order: 5,
heading: "Ready to Train",
description:
  "City Gym equips you with expert-led workouts, real-time progress tracking, and a powerful support system — so you're always ready to crush your fitness goals.",

  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
