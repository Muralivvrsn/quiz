import Breadcrumb from "./../../Breadcrumb";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Subject from "./../FlashCard/Subject";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

const FlashCard = () => {
  const location = useLocation();
  const isFlashcardRoot = location.pathname === "/flashcard";
  const data = [
    { name: "Mathematics" },
    { name: "Science" },
    { name: "Social" },
    { name: "English" },
  ];
  return (
    <div className="ml-[100px] mt-[50px] flex">
      <div className="flex">
        <ul className="flex flex-wrap gap-10">
          {data &&
            data.map((d) => (
              <li className="w-[300px] h-[300px] text-white text-center font-lato text-[38.257px] font-bold normal-case tracking-[0.765px] flex justify-center items-center rounded-[42.507px] bg-gradient-to-br from-[#051A91] via-[#061C93] to-[#1F80EB]">
                <Link to={d.name}>{d.name}</Link>
              </li>
            ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default FlashCard;
