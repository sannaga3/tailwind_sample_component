export const InformationCard = (props) => {
  console.log(props);
  const { name, access, tel, ceo, histories } = props.information;

  const informationStyle =
    "grid grid-cols-3 place-items-auto border-b-2 border-gray-500 p-2";

  return (
    <>
      <div className="text-gray-600 md:mt-5 bg-white opacity-80 hover:opacity-100 py-5 mx-30 pr-10">
        <div className={informationStyle}>
          <div>Company Name:</div>
          <div>{name}</div>
        </div>
        <div className={informationStyle}>
          <div>Access:</div>
          <div>{access}</div>
        </div>
        <div className={informationStyle}>
          <div>Tel:</div>
          <div>{tel}</div>
        </div>
        <div className={informationStyle}>
          <div>CEO:</div>
          <div>{ceo}</div>
        </div>
        <div className="p-2">Histories:</div>
        <div className="border-b-2 border-gray-500 pb-5">
          <div className="row-span-1 p-1">
            {histories.map((history) => (
              <div
                className="grid grid-cols-6 place-items-auto border-dotted border-b-2 border-gray-500 p-1"
                key={history.content}
              >
                <div className="col-span-1">{history.date}</div>
                <div className="col-span-3">{history.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
