import { Footer } from "../atoms/layouts/Footer";
import { Header } from "../organisms/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div className="mx-10 flex flex-col h-screen">
      <Header className="sticky top-0" />
      <div className="flex-grow p-5">{children}</div>
      <Footer className="sticky bottom-0" />
    </div>
  );
};
