import { IndigoLink } from "../atoms/link/IndigoLink";
import { ListItem } from "../atoms/List/ListItem";

export const BusinessPlanCard = ({ name, price, explanations }) => {
  return (
    <>
      <div className="p-4">
        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span className="bg-indigo-500 text-white px-3 py-1 text-xs absolute right-0 top-0 rounded-bl">
            {name}
          </span>
          <p className="text-left text-2xl font-bold font-serif text-gray-900 pb-2">
            {name} Plan
          </p>
          <h1 className=" text-gray-900 text-left pb-2 mb-3 border-b-2 border-gray-500">
            <span className="text-xl mt-2 mr-2">price: </span>
            <span className="text-3xl">{price}</span>
          </h1>
          <div className="overflow-y-scroll mb-3">
            {explanations.map((explanation) => (
              <ListItem value={explanation} key={explanation} />
            ))}
          </div>
          <div className="my-1">
            <IndigoLink value="Contact us!" path="/contact" />
          </div>
        </div>
      </div>
    </>
  );
};
