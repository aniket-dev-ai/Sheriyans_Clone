import React from "react";
import { NavLink } from "react-router-dom";

function CourseCard({ course }) {
  const {
    courseImage,
    courseName,
    courseLanguage,
    saleName,
    courseOriginalPrice,
    coursePriceAfterDiscount,
    saleDiscount,
  } = course;

  const formatCourseName = (name) => {
    return name.replace(/\s+/g, '_');
  };

  const formattedCourseName = formatCourseName(courseName);

  return (
    <div className="bg-[#171717] w-[27vw] text-white rounded-lg">
      <img className="w-full rounded-t-lg" src={courseImage} alt={courseName} />
      <div className="p-4 flex flex-col">
        <h1 className="text-xl mb-2">{courseName}</h1>
        <p className="bg-gray-800 uppercase w-24 text-center rounded-lg px-4 py-1">
          {courseLanguage}
        </p>
        <div className="mt-8">
          <h1 className="text-[#24CFA6] text-lg">{saleName}</h1>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-5 items-center">
              <h1 className="text-2xl line-through">₹{courseOriginalPrice}</h1>
              <h1 className="text-gray-500 text-xl">₹{coursePriceAfterDiscount}</h1>
            </div>
            <h1 className="bg-white text-black text-sm py-1 px-2 rounded-md">
              {saleDiscount} OFF
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <NavLink to={`/courses/${formattedCourseName}`}>
          <button className="bg-[#24CFA6] w-full text-2xl text-black font-semibold py-2 mt-4">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default CourseCard;
