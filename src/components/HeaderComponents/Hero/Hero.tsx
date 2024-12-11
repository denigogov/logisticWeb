import "./_hero.scss";
import truckHero from "../../../assets/truckHero.png";
import Button from "../../Button/Button";
import { HeroTypesData } from "./hero.data";
interface HeroProps {
  heroData: HeroTypesData;
}

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  const heroButtons = heroData.hero.buttons ?? [];
  const heroText = heroData.hero.text;

  return (
    <section className="hero">
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-expand">
          <div className="uk-flex  uk-flex-column uk-flex-row@m	 uk-flex-middle	">
            <div className="uk-width-1-2@m">
              <h1 className="uk-heading-large ">
                <span>{heroText.top}</span>
                <br />
                <span className="uk-text">
                  <span className="hero__highlight">{heroText.highlight}</span>{" "}
                  {heroText.middle}
                </span>
              </h1>
              <p className="uk-text-lead">{heroText.copy}</p>
              <div className="hero__buttons">
                {heroButtons.map((btn, index) => (
                  <Button key={index} buttonData={btn} />
                ))}
              </div>
            </div>
            <div className="uk-width-1-2@m">
              <div className="uk-flex-center">
                <img src={truckHero} alt={truckHero} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
