export const ListItem = ({ value }) => {
  return (
    <div className="pl-2">
      <div className="flex flex-row items-center text-left text-gray-600 mb-2">
        <div>
          <div className="w-2 h-2 mr-2 bg-gray-400 rounded-full"></div>
        </div>
        <div className="break-normal">{value}</div>
      </div>
    </div>
  );
};
