import { useState } from "react";
import { Link } from "react-router-dom";

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

  const normalStyle = "hover:text-blue-600 hover:underline cursor-pointer";
  const activeStyle = "text-blue-700 underline cursor-pointer";

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
          <div className="flex flex-row space-x-16">
            <Link
              to="/"
              value="Top"
              onClick={(e) => setActiveTab(e.target.value)}
            >
              <label
                htmlFor="navLink"
                className={activeTab === "Top" ? activeStyle : normalStyle}
              >
                Top
              </label>
              <input
                type="radio"
                name="navLink"
                className="hidden"
                value="Top"
              />
            </Link>
            <Link
              to="/news"
              value="News"
              onClick={(e) => setActiveTab(e.target.value)}
            >
              <label
                htmlFor="navLink"
                className={activeTab === "News" ? activeStyle : normalStyle}
              >
                News
              </label>
              <input
                type="radio"
                name="navLink"
                className="hidden"
                value="News"
              />
            </Link>
            <Link
              to="/company"
              value="Company"
              onClick={(e) => setActiveTab(e.target.value)}
            >
              <label
                htmlFor="navLink"
                className={activeTab === "Company" ? activeStyle : normalStyle}
              >
                News
              </label>
              <input
                type="radio"
                name="navLink"
                className="hidden"
                value="Company"
              />
            </Link>
            <Link
              to="/work"
              value="Work"
              onClick={(e) => setActiveTab(e.target.value)}
            >
              <label
                htmlFor="navLink"
                className={activeTab === "Work" ? activeStyle : normalStyle}
              >
                Work
              </label>
              <input
                type="radio"
                name="navLink"
                className="hidden"
                value="Work"
              />
            </Link>
            <Link
              to="/contact"
              value="Contact"
              onClick={(e) => setActiveTab(e.target.value)}
            >
              <label
                htmlFor="navLink"
                className={activeTab === "Contact" ? activeStyle : normalStyle}
              >
                Contact
              </label>
              <input
                type="radio"
                name="navLink"
                className="hidden"
                value="Contact"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Top = () => {
  const [height, setHeight] = useState(document.body.clientHeight);

  window.addEventListener(
    "resize",
    function () {
      setHeight(document.body.clientHeight);
    },
    true
  );
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Top</h1>
      </div>
      <section
        className="w-100 text-gray-600 body-font border-2 border-gray-500 mt-5 bg-white opacity-80 overflow-y-scroll hover:opacity-100 lg:w-3/4"
        style={{ maxHeight: height * 0.6 }}
      >
        <div className="grid grid-cols-2">
          <div className="col-2 px-10 py-5">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="top_image"
                className="h-full w-full bg-gray-200"
                src="#"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Concept Title
            </h2>
            <div className="p-3 break-all text-left">
              Explain concept. Concept is .... and so
              on~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </div>
            <div className="mt-4 mb-10">
              <Link
                to="/company"
                className="w-5 text-white bg-indigo-400 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-500 rounded"
              >
                company
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="py-3 border-t-2 border-gray-500 flex justify-center">
      &copy; sannaga
    </footer>
  );
};
