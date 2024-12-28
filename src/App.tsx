import { useInView } from "react-intersection-observer";
import About from "./Block/About/About";
import Action from "./Block/Action/Action";
import FooterSection from "./Block/FooterSection/FooterSection";
import Form from "./Block/Form/Form";
import Header from "./Block/Header/Header";
import Service from "./Block/Service/Service";
import arrowScrollTopIcon from "./assets/arrowScrollIcon.svg";

const App: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });
  const scrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {!inView && (
        <img
          onClick={scrollOnTop}
          src={arrowScrollTopIcon}
          alt={arrowScrollTopIcon}
          className="arrow-scroll "
        />
      )}

      <Header observer={ref} />
      <About />
      <Action />
      <Service />
      <Form />
      <FooterSection />
    </div>
  );
};

export default App;
