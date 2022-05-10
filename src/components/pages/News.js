import { useState } from "react";

import { NewsItem } from "../atoms/news/NewsItem";

export const News = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener(
    "resize",
    function () {
      setWidth(window.innerWidth);
    },
    true
  );

  const newsList = [
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
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">News</h1>
      </div>
      <section className="text-gray-600 bg-white opacity-80 hover:opacity-100 py-3 pl-6 pr-10 mt-5 border-2 border-gray-500 md:py-5">
        {width > 768 && (
          <div className="ml-2 pt-2 pb-2 pl-8 font-semibold text-lg text-center border-b-2 border-gray-500 grid md:grid-cols-8 grid-cols-1">
            <div className="col-none md:col-span-2">date</div>
            <div className="col-none md:col-span-2">title</div>
            <div className="col-none md:col-span-4">content</div>
          </div>
        )}

        {newsList.map((news) => (
          <NewsItem
            date={news.date}
            title={news.title}
            content={news.content}
            key={news.id}
          />
        ))}
      </section>
    </>
  );
};
