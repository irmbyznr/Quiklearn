import React from "react";
import { info, image } from "../constants/index";
import { TopCoursesCard } from "./top-courses-card";

export const TopClassCourses = () => {
  const {
    classCoursesTitle1,
    classCoursesTitle2,
    classCoursesDesc1,
    classCoursesDesc2,
  } = info;
  return (
    <div className="bg-cream">
      <div className="mx-auto container flex flex-col items-center justify-between p-6 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-grey pb-5 pt-24">{classCoursesTitle1}</p>
          <h2 className="text-purple text-4xl font-semibold">{classCoursesTitle2}</h2>
          <img src={image.underline} alt="" />
          <p className="text-base text-grey pt-5 ">{classCoursesDesc1}</p>
          <p className="text-base text-grey">{classCoursesDesc2}</p>
        </div>
        <TopCoursesCard/>
      </div>
    </div>
  );
};
