import { React, useState } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "../atoms/link/NavLink";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Top");

  return (
    <header className="py-3 border-b-2 border-gray-500">
      <div className="flex flex-row justify-left">
        <div className="px-10 mr-40">
          <Link to="/">logo</Link>
        </div>
        <div className="flex flex-row space-x-16">
          <NavLink
            to="/"
            tabName="Top"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/news"
            tabName="News"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/company"
            tabName="Company"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/work"
            tabName="Work"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavLink
            to="/contact"
            tabName="Contact"
            active={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </header>
  );
};
