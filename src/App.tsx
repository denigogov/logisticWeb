import { useInView } from "react-intersection-observer";
import About from "./Block/About/About";
import Action from "./Block/Action/Action";
import FooterSection from "./Block/FooterSection/FooterSection";
import Form from "./Block/Form/Form";
import Header from "./Block/Header/Header";
import Service from "./Block/Service/Service";
import arrowScrollTopIcon from "./assets/arrowScrollIcon.svg";
import { useLocation } from "react-router-dom";
import { useData } from "./hooks/useData";

const App: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const scrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { removeHashfromUrl } = useData();

  // Hide the # from the url
  const location = useLocation();
  if (location.hash) {
    removeHashfromUrl();
  }

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
      <section id="about">
        <About />
      </section>
      <Action />
      <section id="service">
        <Service />
      </section>
      <section id="contact">
        <Form />
      </section>
      <FooterSection />
    </div>
  );
};

export default App;
