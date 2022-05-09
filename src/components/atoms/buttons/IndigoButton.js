export const IndigoButton = (props) => {
  const { value, path } = props;

  return (
    <button className="text-white bg-indigo-500 border-0 p-1 px-3 mr-8 text-sm  rounded-full focus:outline-none hover:bg-indigo-600">
      {value}
    </button>
  );
};
