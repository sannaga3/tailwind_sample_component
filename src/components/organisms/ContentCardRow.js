import { IndigoLink } from "../atoms/link/IndigoLink";
import { Card } from "../atoms/card/Card";
import { useState } from "react";

export const ContentCardRow = ({ imagePath, buttonValue, buttonPath }) => {
  const [height, setHeight] = useState(document.body.clientHeight);

  window.addEventListener(
    "resize",
    function () {
      setHeight(document.body.clientHeight);
    },
    true
  );

  return (
    <>
      <section
        className="w-100 text-gray-600 body-font border-2 border-gray-500 mt-5 bg-white opacity-80 overflow-y-scroll hover:opacity-100 lg:w-3/4"
        style={{ maxHeight: height * 0.6 }}
      >
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
