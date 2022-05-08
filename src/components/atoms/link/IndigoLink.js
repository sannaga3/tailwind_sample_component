import { Link } from "react-router-dom";

export const IndigoLink = (props) => {
  const { value, path } = props;

  return (
    <Link
      to={path}
      className="w-5 text-white bg-indigo-400 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-500 rounded"
    >
      {value}
    </Link>
  );
};
