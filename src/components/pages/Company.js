import { InformationCard } from "../atoms/card/InformationCard";

export const Company = () => {
  const information = {
    name: "sample Inc.",
    access: "OOOOOOOOO",
    tel: "OO-OOOO-OOOO",
    ceo: "Best sample man",
    histories: [
      {
        id: 1,
        date: "2020/01/04",
        content: "This Company was build",
      },
      {
        id: 2,
        date: "2021/02/04",
        content: "Moved new place And employee was over 30",
      },
      {
        id: 3,
        date: "2025/02/04",
        content: "to be continued",
      },
    ],
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Company Information</h1>
      </div>
      <section className="text-gray-600 body-font border-2 border-gray-500 mt-5 bg-white opacity-80 hover:opacity-100">
        <div className="py-5 mx-8 px-3  lg:mx-20 lg:px-12">
          <InformationCard information={information} />
        </div>
      </section>
    </>
  );
};
