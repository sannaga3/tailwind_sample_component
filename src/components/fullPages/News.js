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

export const News = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener(
    "resize",
    function () {
      setWidth(window.innerWidth);
    },
    true
  );

  const topics = [
    {
      id: 1,
      date: "2020/02/22",
      title: "Winter vacation",
      content: "announce about winter vacation",
    },
    {
      id: 2,
      date: "2020/04/23",
      title: "Golden week",
      content: "announce about golden week",
    },
    {
      id: 3,
      date: "2020/07/22",
      title: "Summer vacation",
      content: "announce about summer vacation",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold border-b-0 pb-8 md:pb-0">News</h1>
      <section className="text-gray-600 md:mt-5 bg-white opacity-80 hover:opacity-100 py-5 pl-6 pr-10 border-2 border-gray-500">
        {width > 768 && (
          <div className="ml-2 pt-2 pb-2 pl-8 font-semibold text-lg text-center border-b-2 border-gray-500 grid md:grid-cols-8 grid-cols-1">
            <div className="md:col-span-2 col-none">day</div>
            <div className="md:col-span-2 col-none">title</div>
            <div className="md:col-span-4 col-none">content</div>
          </div>
        )}

        {topics.map((topic) => (
          <div className="py-2 pl-2" key={topic.title}>
            <div className="grid gap-1 grid-cols-1 font-semibold border-b-2 border-gray-500 text-center md:grid-cols-8 md:py-4">
              <div className="col-span-1 md:col-span-2">{topic.date}</div>
              <div className="col-span-1 md:col-span-2">{topic.title}</div>
              <div className="col-span-1 md:col-span-4 font-normal pl-5 pb-2 md:pb-0">
                {topic.content}
              </div>
            </div>
          </div>
        ))}
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
