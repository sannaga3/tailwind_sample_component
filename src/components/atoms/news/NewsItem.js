export const NewsItem = (prop) => {
  const { date, title, content } = prop.news;

  return (
    <div className="py-2 pl-2">
      <div className="container grid gap-1 grid-cols-4 font-semibold border-b-2 border-gray-500 text-center  md:grid-cols-12 md:text-left md:py-4">
        <div className="md:col-span-2 col-span-1 md:pl-4">{date}</div>
        <div className="md:col-span-2 col-span-2">{title}</div>
        <div className="md:col-span-6 col-span-4 text-left font-normal pl-5">
          {content}
        </div>
      </div>
    </div>
  );
};
