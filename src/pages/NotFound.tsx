import { useTranslation } from "react-i18next";
import ErrorDisplay, { ErrorTypes } from "../components/NotFound/ErrorDisplay";
import { useData } from "../hooks/useData";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  const { navigateToRoute } = useData();

  const errorDispalyData: ErrorTypes = {
    codeStatus: "404",
    messageTitle1: t("errorDispaly.message.titleFirst"),
    messageHighlight: t("errorDispaly.message.titleHighlight"),
    messageTitle2: t("errorDispaly.message.titleLast"),
    messageSubTitle: t("errorDispaly.message.subTitle"),

    buttonHome: {
      label: t("errorDispaly.message.button.home"),
      size: "medium",
      className: "errorDisplay__button-1",
      onClick: () => navigateToRoute("/"),
    },
  };

  return (
    <div>
      <ErrorDisplay errorDispalyData={errorDispalyData} />
    </div>
  );
};

export default NotFound;
