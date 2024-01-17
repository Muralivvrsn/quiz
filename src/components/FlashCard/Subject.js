import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Subject = () => {
  const { subject, topic } = useParams();
  const data = {
    Mathematics: [
      { name: "Relations and Functions", path: "Relations and Functions" },
      { name: "Numbers", path: "Numbers" },
      { name: "Trigonometry", path: "Trigonometry" },
      { name: "Geometry", path: "Geometry" },
    ],
    Science: [
      { name: "Repository", path: "Repository" },
      { name: "Life Cycle", path: "Life Cycle" },
    ],
  };
  return (
    <div className="flex ml-[100px] mt-[50px] ">
      <ul className="flex flex-wrap gap-10">
        {data[subject]?.map((d, index) => (
          <li className="w-[300px] h-[300px] text-white text-center font-lato text-[38.257px] font-bold normal-case tracking-[0.765px] flex justify-center items-center rounded-[42.507px] bg-gradient-to-br from-[#051A91] via-[#061C93] to-[#1F80EB]">
            <Link to={d.path.replace(/\s/g, "_")}>{d.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Subject;
