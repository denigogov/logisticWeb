import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import { getFooterData } from "./footerSection.data";

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = ({}) => {
  const { t } = useTranslation();

  const footerData = getFooterData(t);
  return (
    <div>
      <Footer footerData={footerData} />
    </div>
  );
};

export default FooterSection;
