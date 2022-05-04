export const Card = (props) => {
  const { title, content } = props;

  return (
    <>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {title}
      </h2>
      <div className="p-3 break-all text-left">{content}</div>
    </>
  );
};
