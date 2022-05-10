import { React, useState } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "../atoms/link/NavLink";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Top");
  const [isHamburger, setIsHamburger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener(
    "resize",
    function () {
      setWindowWidth(window.innerWidth);
    },
    true
  );

  let IsShowLink =
    windowWidth < 768 && isHamburger === false ? "hidden" : "flex flex-col";

  return (
    <header className="py-3 border-b-2 border-gray-500">
      <div className="flex flex-row justify-between items-center px-12 md:justify-around md:px-0">
        <div className="animate-rotateY border-2 border-black rounded-full shadow-xl bg-white">
          <div className="border-2 bg-black rounded-full p-2">
            <Link to="/">
              <div className="text-white text-lg w-12 h-1 mb-6 ml-4">logo</div>
            </Link>
          </div>
        </div>

        <div
          className="w-8 h-8 border-2 border-black rounded-md flex flex-col justify-center items-center mt-1 md:hidden hover:cursor-pointer"
          onClick={() => setIsHamburger(!isHamburger)}
        >
          <div className="w-5 border border-black my-1"></div>
          <div className="w-5 border border-black"></div>
          <div className="w-5 border border-black my-1"></div>
        </div>
        <div
          className={`${IsShowLink} absolute top-14 right-20 bg-gray-800 rounded-md opacity-70 text-white space-y-3 py-3 px-5 z-50 md:flex-row  md:space-x-16 md:space-y-0 md:static md:text-black md:bg-inherit`}
        >
          <NavLink
            to="/"
            tabName="Top"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/news"
            tabName="News"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/company"
            tabName="Company"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/work"
            tabName="Work"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/contact"
            tabName="Contact"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </header>
  );
};
