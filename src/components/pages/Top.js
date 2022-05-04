import { ContentCardRow } from "../organisms/ContentCardRow";

export const Top = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Top</h1>
        <ContentCardRow
          imagePath="#"
          buttonValue="company"
          buttonPath="/company"
        />
      </div>
    </div>
  );
};
