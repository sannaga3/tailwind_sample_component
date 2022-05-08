import { IndigoLink } from "../atoms/link/IndigoLink";
import { Card } from "../atoms/card/Card";

export const ContentCardRow = (props) => {
  const { imagePath, buttonValue, buttonPath } = props;
  return (
    <>
      <section className="text-gray-600 body-font border-2 border-gray-500 mt-5 w-100 bg-white opacity-80 hover:opacity-100">
        <div className="grid grid-cols-2">
          <div className="col-2 px-10 py-5">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="top_image"
                className="h-full w-full bg-gray-200"
                src={imagePath}
              />
            </div>
          </div>
          <div className="text-center">
            <Card
              title="Slogan"
              content="Our slogan is .... and so on~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            />
            <div className="mt-4 mb-10">
              <IndigoLink value={buttonValue} path={buttonPath} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
