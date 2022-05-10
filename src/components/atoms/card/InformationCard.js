export const InformationCard = (props) => {
  const { name, access, tel, ceo, histories } = props.information;

  const informationStyle =
    "grid grid-cols-1 place-items-center border-b-2 border-gray-500 p-2 md:grid-cols-3 md:place-items-start md:pl-12";
  const titleColSpan = "col-span-1";
  const contentColSpan = "col-span-1 md:col-span-2";

  return (
    <>
      <div className="text-gray-600 md:mt-5 bg-white opacity-80 hover:opacity-100 py-5 mx-30 pr-10">
        <div className={informationStyle}>
          <div className={titleColSpan}>Company Name:</div>
          <div className={contentColSpan}>{name}</div>
        </div>
        <div className={informationStyle}>
          <div className={titleColSpan}>Access:</div>
          <div className={contentColSpan}>{access}</div>
        </div>
        <div className={informationStyle}>
          <div className={titleColSpan}>Tel:</div>
          <div className={contentColSpan}>{tel}</div>
        </div>
        <div className={informationStyle}>
          <div className={titleColSpan}>CEO:</div>
          <div className={contentColSpan}>{ceo}</div>
        </div>

        <div className={`${informationStyle} border-b-0`}>Histories:</div>
        {histories.map((history) => (
          <div
            key={history.content}
            className={`${informationStyle} border-2 border-dotted`}
          >
            <div className={titleColSpan}>{history.date}</div>
            <div className={contentColSpan}>{history.content}</div>
          </div>
        ))}
      </div>
    </>
  );
};
