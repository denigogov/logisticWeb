import { useTranslation } from "react-i18next";
import ErrorDisplay, { ErrorTypes } from "../components/NotFound/ErrorDisplay";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  const { t } = useTranslation();

  const errorDispalyData: ErrorTypes = {
    codeStatus: "404",
    messageTitle1: t("errorDispaly.message.title.first"),
    messageHighlight: t("errorDispaly.message.title.highlight"),
    messageTitle2: t("errorDispaly.message.title.last"),
    messageSubTitle: t("errorDispaly.message.subTitle"),

    buttonContact: {
      label: t("errorDispaly.message.button.contact"),
      size: "medium",
      className: "errorDisplay__button-1",
    },

    buttonHome: {
      label: t("errorDispaly.message.button.home"),
      size: "medium",
      className: "errorDisplay__button-1",
    },
  };

  //   codeStatus: "404",
  //   messageTitle1: "Page",
  //   messageHighlight: "Not",
  //   messageTitle2: "Found",
  //   messageSubTitle: " Sorry, we couldn’t find the page you’re looking for",

  //   buttonContact: {
  //     label: "Contact Supporter",
  //     size: "medium",
  //     className: "errorDisplay__button-1",
  //   },

  //   buttonHome: {
  //     label: "Go Back Home",
  //     size: "medium",
  //     className: "errorDisplay__button-1",
  //   },

  return (
    <div>
      <ErrorDisplay errorDispalyData={errorDispalyData} />
    </div>
  );
};

export default NotFound;
