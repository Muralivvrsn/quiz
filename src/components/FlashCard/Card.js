import React, { useState, useEffect } from "react";
import ChildNav from "../Navbar/ChildNav";
import Topic from "./Topic";
const Card = () => {
  const [option, setOption] = useState("Study");
  useEffect(() => {
    console.log(option);
  }, [option]);
  return (
    <div className="flex mx-[100px] mt-[50px] flex-col">
      <ChildNav option={option} setOption={setOption} />
      <Topic option={option} />
    </div>
  );
};

export default Card;
