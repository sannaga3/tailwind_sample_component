import { useState } from "react";
import { IndigoButton } from "../atoms/buttons/IndigoButton";

export const Contact = () => {
  const [businessPlan, setBusinessPlan] = useState("");

  const gridRowStyle =
    "grid grid-cols-1 gap-2 items-center mb-4 md:grid-cols-4 md:gap-12 md:mb-8";
  const labelStyle = "col-span-1 text-sm text-left";
  const inputStyle =
    "col-span-1 md:col-span-2 p-1 bg-gray-200 border border-gray-500 text-gray-900 placeholder-gray-400 text-sm rounded-lg";

  const handleChangePlan = (value) => {
    setBusinessPlan(value);
    console.log(value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <section className="w-2/3 mx-auto text-gray-600 mt-5 bg-white opacity-80 hover:opacity-100 py-3 pl-6 pr-10 border-2 border-gray-500">
        <form className="pt-5 pb-2 px-5">
          <div className={`${gridRowStyle}`}>
            <label htmlFor="name" className={labelStyle}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={inputStyle}
              placeholder="sample man"
            />
          </div>
          <div className={gridRowStyle}>
            <label htmlFor="email" className={labelStyle}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputStyle}
              placeholder="sample@sample.com"
            />
          </div>
          <div className={gridRowStyle}>
            <label htmlFor="address" className={labelStyle}>
              Address
            </label>
            <input
              type="text"
              id="address"
              className={inputStyle}
              placeholder="Address"
            />
          </div>
          <div className={gridRowStyle}>
            <label htmlFor="phone_number" className={labelStyle}>
              Phone_Number
            </label>
            <input
              type="tel"
              id="phone_number"
              className={inputStyle}
              placeholder="xxx-xxxx-xxxx"
            />
          </div>
          <div className={gridRowStyle}>
            <label htmlFor="plan">Plan</label>
            <select
              onChange={(e) => handleChangePlan(e.target.value)}
              className={inputStyle}
            >
              <option value="">選択して下さい</option>
              <option value="Simple Plan">Simple Plan</option>
              <option value="Standard Plan">Standard Plan</option>
              <option value="Premium Plan">Premium Plan"</option>
              <option value="Master Plan">Master Plan"</option>
            </select>
          </div>
          <div className={gridRowStyle}>
            <label htmlFor="Content">Content</label>
            <textarea
              id="other"
              cols="40"
              className="col-span-1 p-1 bg-gray-200 border border-gray-500 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:border-indigo-200 h-20 max-h-40 md:col-span-3"
              placeholder="Content"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <IndigoButton value="送信" path="#" />
          </div>
        </form>
      </section>
    </div>
  );
};
