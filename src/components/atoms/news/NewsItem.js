export const NewsItem = ({ date, title, content }) => {
  return (
    <div className="py-2 pl-2">
      <div className="grid gap-1 grid-cols-1 font-semibold border-b-2 border-gray-500 text-center md:grid-cols-8 md:py-4">
        <div className="col-span-1 md:col-span-2">{date}</div>
        <div className="col-span-1 md:col-span-2">{title}</div>
        <div className="col-span-1 md:col-span-4 font-normal pl-5 pb-2 md:pb-0">
          {content}
        </div>
      </div>
    </div>
  );
};
