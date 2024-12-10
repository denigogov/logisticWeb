import { useTranslation } from "react-i18next";
import Navbar from "../../components/HeaderComponents/Navbar/Navbar";
import { getNavigationData, getHeroData } from "./header.data";
import Hero from "../../components/HeaderComponents/Hero/Hero";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();

  const headerData = getNavigationData(t);
  const heroData = getHeroData(t);

  return (
    <Header>
      <Navbar navigation={headerData} />
      <Hero heroData={heroData} />
    </Header>
  );
};

export default Header;
