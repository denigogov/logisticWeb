import { useTranslation } from "react-i18next";
import { getHeroData } from "./header.data";
import Hero from "../../components/HeaderComponents/Hero/Hero";
interface HeaderTypes {
  observer: (node?: Element | null) => void;
}

const Header: React.FC<HeaderTypes> = ({ observer }) => {
  const { t } = useTranslation();

  const heroData = getHeroData(t);

  return (
    <header>
      {/* <Navbar navigation={headerData} /> */}
      <Hero heroData={heroData} observer={observer} />
    </header>
  );
};

export default Header;
