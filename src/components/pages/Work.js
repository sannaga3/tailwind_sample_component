import { useState } from "react";
import { BusinessPlanCard } from "../organisms/BusinessPlanCard";

export const Work = () => {
  const [height, setHeight] = useState(document.body.clientHeight);

  window.addEventListener(
    "resize",
    function () {
      setHeight(window.innerHeight);
    },
    true
  );

  const businessPlans = [
    {
      id: 1,
      name: "Simple",
      price: "$10~",
      explanations: ["Simple production", "Lowest grade"],
    },
    {
      name: "Standard",
      price: "$20~",
      explanations: ["standard production", "normal grade"],
    },
    {
      id: 2,
      name: "Premium",
      price: "$30~",
      explanations: [
        "Premium production",
        "There are many variations of customize",
      ],
    },
    {
      id: 3,
      name: "Master",
      price: "$40~",
      explanations: [
        "Master production",
        "The highest grade. This has everything you want",
      ],
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Work</h1>
        <section className="text-gray-600 body-font border-2 border-gray-500 mt-5 bg-white opacity-80 hover:opacity-100 overflow-y-scroll">
          <div
            className="container px-5 pt-5 mx-auto"
            style={{ maxHeight: height * 0.6 }}
          >
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-3xl font-medium title-font mb-2 text-gray-900">
                Business Plans
              </h1>
              <p className="lg:w-2/3 mx-auto text-gray-700">
                We can introduce next 4 plans. Customization is also possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {businessPlans.map((businessPlan) => (
                  <BusinessPlanCard plan={businessPlan} key={businessPlan.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
