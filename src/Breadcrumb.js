import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./assests/home.svg";
import DropDown from "./assests/dropdown.svg";
const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbLinks = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;

    return (
      <div key={name} className="flex items-center justify-between">
        <img src={DropDown} alt="" />
        <Link
          to={routeTo}
          className={` text-gray-500${
            isLast ? " text-gray-500" : ""
          }`}
        >
          {name.replace(/_/g," ")}
        </Link>
      </div>
    );
  });

  return (
    <nav aria-label="breadcrumb" className="ml-[100px] mt-[158px] sticky">
      <ol className="flex items-center leading-none ">
        <li>
          <Link to="/" className="">
            {" "}
            <img src={Home} alt="" />{" "}
          </Link>
        </li>
        {breadcrumbLinks.map((link, index) => (
          <li key={index} className="">
            {link}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
