import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "../components/HeaderComponents/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { getNavigationData } from "../Block/Header/header.data";
import App from "../App";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import LegalNoticePage from "../pages/LegalNoticePage";
import NotFound from "../pages/NotFound";
import { DataProvider } from "../hooks/DataContext";

const RootRouter = () => {
  const { t } = useTranslation();

  // passing the Navigation data from router !
  const headerData = getNavigationData(t);
  //

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <DataProvider>
            <Navbar navigation={headerData} />
          </DataProvider>
        }
      >
        <Route index element={<App />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="legal-notice" element={<LegalNoticePage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default RootRouter;
