import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Top");

  const normalStyle = "hover:text-blue-600 hover:underline cursor-pointer";
  const activeStyle = "text-blue-700 underline cursor-pointer";

  return (
    <header className="py-3 border-b-2 border-gray-500">
      <div className="flex flex-row justify-left">
        <div className="px-10 mr-40">
          <Link to="/">logo</Link>
        </div>
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
            <input type="radio" name="navLink" className="hidden" value="Top" />
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
    </header>
  );
};

export const News = () => {
  const [width, setWidth] = useState("");

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

  window.addEventListener(
    "resize",
    function () {
      setWidth(window.innerWidth);
    },
    true
  );

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold border-b-2 pb-8 border-gray-500 md:border-b-0 md:pb-0">
        News
      </h1>
      <section className="text-gray-600 mt-3 md:mt-8">
        {width > 768 && (
          <div className="container pl-5 pt-5 pb-2 font-semibold text-lg text-left border-b-2 border-gray-500 grid md:grid-cols-12 gap-1 grid-cols-1">
            <div className="md:col-span-2 col-none">day</div>
            <div className="md:col-span-2 col-none">title</div>
            <div className="md:col-span-6 col-none">content</div>
          </div>
        )}

        {topics.map((topic) => (
          <div
            className="container py-4 grid gap-1 grid-cols-4 font-semibold border-b-2 border-gray-500 text-center md:grid-cols-12 md:text-left md:py-4"
            key={topic.title}
          >
            <div className="md:col-span-2 col-span-1">{topic.date}</div>
            <div className="md:col-span-2 col-span-2">{topic.title}</div>
            <div className="md:col-span-6 col-span-4 text-left font-normal pl-5">
              {topic.content}
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
