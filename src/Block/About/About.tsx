import { useTranslation } from "react-i18next";
import MediaText from "../../components/Mediatext/MediaText";
import { AboutUsTypes, getAboutUsData } from "./About.data";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const { t } = useTranslation();

  const data: AboutUsTypes = getAboutUsData(t);
  return (
    <section>
      <MediaText aboutUsData={data} />
    </section>
  );
};

export default About;
