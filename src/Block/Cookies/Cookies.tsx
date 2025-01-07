import { useTranslation } from "react-i18next";
import CookiesConsent from "../../components/CookiesComponents/CookiesConsent";
import Modal, { ModalPropTypes } from "../../components/Modal/Modal";
import Tabs, { TabsProps } from "../../components/Tabs/Tabs";
import { CookiePreferenceType } from "../../hooks/DataContext.types";
import { useData } from "../../hooks/useData";
import "./_cookies.scss";

interface CookiesProps {
  onClose: () => void;
}

const Cookies: React.FC<CookiesProps> = ({ onClose }) => {
  const { cookiePreference, setCookiePreference, setCookie } = useData();

  const { t } = useTranslation();

  const setupCookiesOnClick = (
    action: "deny" | "allowAll" | "allowSelected"
  ) => {
    const updatedPreferences: CookiePreferenceType = { ...cookiePreference };

    switch (action) {
      case "deny":
        updatedPreferences.required = true;
        updatedPreferences.marketing = false;
        updatedPreferences.statistic = false;
        break;

      case "allowAll":
        updatedPreferences.required = true;
        updatedPreferences.marketing = true;
        updatedPreferences.statistic = true;
        break;

      case "allowSelected":
        updatedPreferences.required = true;
        // Keeping the current toggle states
        break;

      default:
        break;
    }

    setCookiePreference(updatedPreferences);
    setCookie("cookiePreferences", JSON.stringify(updatedPreferences));
    // set Imidiatly modal on close from footer on click // add timeout for toggleButton smoothe transition !
    setTimeout(onClose, 400);
  };

  const modalSetup: ModalPropTypes = {
    modalData: {
      modalOpen: true,
      modalBackgroundScroll: "hidden",

      modalClose: {
        bottom: true,
        outSide: true,
        top: true,
      },

      modalCookiesBtn: [
        {
          label: t("cookies.mainBtn.deny"),
          size: "medium",
          type: "default",
          onClick: () => setupCookiesOnClick("deny"),
        },
        {
          label: t("cookies.mainBtn.selected"),
          size: "medium",
          type: "default",
          onClick: () => setupCookiesOnClick("allowSelected"),
        },
        {
          label: t("cookies.mainBtn.allowAll"),
          size: "medium",
          type: "secondary",
          onClick: () => setupCookiesOnClick("allowAll"),
        },
      ],
    },
  };

  const tabsData: TabsProps = {
    tabData: {
      tabID: "cookiesTabs",
      items: [
        {
          component: <CookiesConsent />,
          tabName: t("cookies.tab.consent"),
          active: true,
        },
        {
          tabName: t("cookies.tab.details"),
          text: "some text Details",
        },
        {
          tabName: t("cookies.tab.about"),
          disable: false,
          text: "some text About cookies",
        },
      ],
    },
  };
  return (
    <>
      <Modal modalData={modalSetup.modalData}>
        <Tabs tabData={tabsData?.tabData} />
      </Modal>
    </>
  );
};

export default Cookies;
