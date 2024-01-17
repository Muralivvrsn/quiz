import React from "react";
import Breadcrumb from "../../Breadcrumb";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from './Logo';
import FAQ from './FAQ';
const Home = () => {
  return (
    <div className="flex flex-col">
      <Breadcrumb />
      
        <Outlet />
      <Logo/>
      <FAQ/>
    </div>
  );
};

export default Home;
