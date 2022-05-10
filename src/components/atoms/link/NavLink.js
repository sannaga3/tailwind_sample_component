import { Link } from "react-router-dom";

export const NavLink = ({ tabName, active, to, setActiveTab }) => {
  const normalStyle = "hover:text-blue-600 hover:underline cursor-pointer";
  const activeStyle = "text-blue-700 underline cursor-pointer";
  const style = tabName === active ? activeStyle : normalStyle;

  const handleSetActiveTab = (tabName) => {
    return setActiveTab(tabName);
  };

  return (
    <Link to={to} value={tabName} onClick={() => handleSetActiveTab(tabName)}>
      <label htmlFor="navLink" className={style}>
        {tabName}
      </label>
      <input type="radio" name="navLink" className="hidden" value="Top" />
    </Link>
  );
};
