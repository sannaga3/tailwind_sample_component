export const IndigoButton = (props) => {
  const { value, path } = props;

  return (
    <button className="text-white bg-indigo-500 border-0 pt-2 px-4 mr-8 focus:outline-none hover:bg-indigo-600">
      {value}
    </button>
  );
};
