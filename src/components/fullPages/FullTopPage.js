import { Header, Top, Footer } from "./Top";

export const FullTopPage = () => {
  return (
    <>
      <div className="mx-10 flex flex-col h-screen">
        <Header className="sticky top-0" />
        <div className="flex-grow p-5">
          <Top />
        </div>
        <Footer className="sticky bottom-0" />
      </div>
    </>
  );
};
