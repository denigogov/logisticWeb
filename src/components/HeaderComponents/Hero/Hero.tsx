import "./_hero.scss";
import truckHero from "../../../assets/truckHero.png";
interface HeroProps {
  heroData: any;
}

const Hero: React.FC<HeroProps> = ({ heroData }) => {
  return (
    <div className="hero">
      <div className="hero__first">
        <div className="hero__first-content">
          <h1>Kompakt. Flexibel. Immer pünktlich.</h1>
        </div>
      </div>

      <div className="hero__second">
        <img src={truckHero} alt={truckHero} />
      </div>
    </div>
  );
};

export default Hero;
