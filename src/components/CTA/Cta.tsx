import "./_cta.scss";
import Button from "../Button/Button";
import CtaTypes from "./cta.types";

interface CtaProps {
  ctaData: CtaTypes;
}

const Cta: React.FC<CtaProps> = ({ ctaData }) => {
  const data = ctaData;

  return (
    <div className="uk-section uk-container uk-container-expand cta ">
      <h3 className="cta__headline">
        {data.titleTop} <br />
        {data.titleBottom}
      </h3>

      {data.button && <Button buttonData={data.button} />}
    </div>
  );
};

export default Cta;
