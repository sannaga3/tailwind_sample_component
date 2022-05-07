import { ContentCardRow } from "../organisms/ContentCardRow";

export const Top = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Top</h1>
      </div>
      <ContentCardRow
        imagePath="#"
        buttonValue="company"
        buttonPath="/company"
      />
    </div>
  );
};
