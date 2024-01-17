import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Idea from "../../assests/idea.svg";
import Sound from "../../assests/sound.svg";
import Reload from "../../assests/reload.svg";
import ArrowLeft from "../../assests/arrow_left.svg";
import ArrowRight from "../../assests/arrow_right.svg";
import FullScreen from "../../assests/full_screen.svg";
const Topic = ({ option }) => {
  const { subject, topic } = useParams();
  const [number, setNumber] = useState(1);
  const totalNumber = 10;
  return (
    <div className="flex flex-col w-[712px] gap-[20px] m-auto">
      <div className="flex-shrink w-full h-[394px] items-center flex-col justify-start m-auto mt-[30px] text-white text-center font-lato text-[38.257px] font-bold normal-case tracking-[0.765px] flex  rounded-[42.507px] bg-gradient-to-br from-[#051A91] via-[#061C93] to-[#1F80EB]">
        <div className="h-[30px] w-full flex justify-between items-center mt-[25px]">
          <div className="ml-[25px]">
            <img src={Idea} alt="" />
          </div>
          <div className="mr-[25px]">
            <img src={Sound} alt="" />
          </div>
        </div>
        <div className="text-white text-center font-lato text-[38.257px] flex justify-center items-center font-bold tracking-[0.765px] w-full h-2/3">
          9 + 6 + 7x - 2x - {number}
        </div>
      </div>
      <div className="flex justify-around items-center h-[100px] m-auto w-full">
        <div>
          <img src={Reload} alt="" className="cursor-pointer" onClick={()=>setNumber(1)} />
        </div>
        <div>
          <img
            src={ArrowLeft}
            alt=""
            className="cursor-pointer"
            onClick={() => setNumber((prev) => (prev <= 1 ? prev : prev - 1))}
          />
        </div>
        <div className="text-[#202B37] font-inter text-[24px] font-bold">
          {number < 10 ? "0" + number : number}/{totalNumber}
        </div>
        <div>
          <img
            src={ArrowRight}
            alt=""
            className="cursor-pointer"
            onClick={() => setNumber((prev) => (prev >= 10 ? prev : prev + 1))}
          />
        </div>
        <div>
          <img src={FullScreen} alt="" className="cursor-pointer" />
        </div>
      </div>
      
    </div>
  );
};

export default Topic;
