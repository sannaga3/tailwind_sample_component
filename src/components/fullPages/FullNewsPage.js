import { Header, News, Footer } from "./News";

export const FullNewsPage = () => {
  return (
    <>
      <div className="mx-10 flex flex-col h-screen">
        <Header className="sticky top-0" />
        <div className="flex-grow p-5">
          <News />
        </div>
        <Footer className="sticky bottom-0" />
      </div>
    </>
  );
};
