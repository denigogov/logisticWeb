import ToggleButton, { toggleButtonTypes } from "../ToggleButton/ToggleButton";
import "./_cookiesConsent.scss";
import { useData } from "../../hooks/useData";
import {
  CookiePreferenceKeysType,
  CookiePreferenceType,
} from "../../hooks/DataContext.types";
import { useTranslation } from "react-i18next";

interface CookiesConsentProps {}

const CookiesConsent: React.FC<CookiesConsentProps> = ({}) => {
  const { setCookiePreference, cookiePreference, navigateToRoute } = useData();

  const { t } = useTranslation();

  const handleToggleChange = (id: CookiePreferenceKeysType) => {
    const updatedPreferences: CookiePreferenceType = {
      ...cookiePreference,
      [id]: !cookiePreference[id],
    };

    setCookiePreference(updatedPreferences);
  };

  const dataToggleButton: toggleButtonTypes[] = [
    {
      // active: cookiePreference.required,
      active: true,
      disable: true,
      label: t("cookies.toggleButton.required"),
      uniqueId: "required",
    },
    {
      active: cookiePreference.statistic,
      label: t("cookies.toggleButton.statistic"),
      uniqueId: "statistic",
    },
    {
      active: cookiePreference.marketing,
      disable: false,
      label: t("cookies.toggleButton.marketing"),
      uniqueId: "marketing",
    },
  ];

  return (
    <div className="cookiesConsent">
      <div className="cookiesConsent__text  uk-height-small ">
        <p className="uk-text-meta uk-text-small  ">
          {t("cookies.tabsText.consent.row1")}
        </p>

        <p className="uk-text-meta uk-text-small">
          {t("cookies.tabsText.consent.row2")}{" "}
          <a
            className="uk-text-primary"
            onClick={() => navigateToRoute("/privacy")}
          >
            {t("cookies.tabsText.consent.link")}
          </a>
        </p>
      </div>
      <div
        className={`cookiesConsent__switchBtn uk-flex uk-flex-column uk-flex-row@s uk-child-width-1-${dataToggleButton?.length}@s`}
      >
        {dataToggleButton.map((btn, i) => (
          <ToggleButton
            toggleButtonSetup={btn}
            key={i}
            onToggleChange={handleToggleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default CookiesConsent;
