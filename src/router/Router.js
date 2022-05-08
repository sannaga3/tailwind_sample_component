import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../components/template/DefaultLayout";
import { Top } from "../components/pages/Top";
import { News } from "../components/pages/News";
import { Company } from "../components/pages/Company";
import { Work } from "../components/pages/Work";
import { Contact } from "../components/pages/Contact";
import { FullTopPage } from "../components/fullPages/FullTopPage";
import { FullNewsPage } from "../components/fullPages/FullNewsPage";
import { NotFound } from "../components/pages/NotFound";

export const Router = () => {
  const path = window.location.href;
  const isDefaultLayout = path.includes("full");

  return (
    <>
      <BrowserRouter>
        <div
          id="background-image"
          className="bg-top-img bg-cover opacity-90 w-full h-full"
        >
          {isDefaultLayout === false ? (
            <DefaultLayout>
              <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/news" element={<News />} />
                <Route path="/company" element={<Company />} />
                <Route path="/Work" element={<Work />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </DefaultLayout>
          ) : (
            <Routes>
              <Route path="/fullTop" element={<FullTopPage />} />
              <Route path="/fullNews" element={<FullNewsPage />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </>
  );
};
