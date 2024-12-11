import { useTranslation } from "react-i18next";
import languageSwitch from "../../assets/languageSwitch.svg";
import "./_languageSwitcher.scss";
import {
  getLocalStorageItem,
  saveToLocalStorage,
} from "../../utils/localstorage";

interface LanguageSwitchProps {}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({}) => {
  const { i18n } = useTranslation();
  const localStorageLang = getLocalStorageItem("lng");

  if (!localStorageLang) {
    saveToLocalStorage("lng", "de");
  }

  const onClickChange = (language: string) => {
    saveToLocalStorage("lng", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="languageSwitch uk-margin  ">
      <div uk-form-custom="target: > * > span:first-child">
        <select
          onChange={(e) => onClickChange(e.target.value)}
          defaultValue={localStorageLang ?? ""}
        >
          <option value="de">DE</option>
          <option value="en">EN</option>
        </select>
        <button className="languageSwit__btn uk-button " type="button">
          <span></span>
          <img src={languageSwitch} alt={languageSwitch} />
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitch;
