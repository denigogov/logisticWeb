import { useTranslation } from "react-i18next";
import Navbar from "../../components/HeaderComponents/Navbar/Navbar";
import { getNavigationData, getHeroData } from "./header.data";
import Hero from "../../components/HeaderComponents/Hero/Hero";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const headerData = getNavigationData(t);
  const heroData = getHeroData(t);

  return (
    <header>
      <Navbar navigation={headerData} />
      <Hero heroData={heroData} />
    </header>
  );
};

export default Header;
