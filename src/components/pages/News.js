import { useState } from "react";

import { TopicItem } from "../atoms/topic/TopicItem";

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
          <TopicItem topic={topic} key={topic.id} />
        ))}
      </section>
    </div>
  );
};
