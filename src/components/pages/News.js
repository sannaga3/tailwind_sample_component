import { useState } from "react";

import { TopicItem } from "../atoms/topic/TopicItem";

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
      <h1 className="text-3xl font-bold">News</h1>
      <section className="text-gray-600 md:mt-5 bg-white opacity-80 hover:opacity-100 py-5 pl-6 pr-10 border-2 border-gray-500">
        {width > 768 && (
          <div className="ml-2 pt-2 pb-2 pl-8 font-semibold text-lg text-left border-b-2 border-gray-500 grid md:grid-cols-12 grid-cols-1">
            <div className="md:col-span-2 col-none">day</div>
            <div className="md:col-span-2 col-none">title</div>
            <div className="md:col-span-6 col-none">content</div>
          </div>
        )}

        {topics.map((topic) => (
          <TopicItem topic={topic} key={topic.id} />
        ))}
      </section>
    </div>
  );
};
