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
import Cookies from "./Block/Cookies/Cookies";
import Tabs, { TabsProps } from "./components/Tabs/Tabs";
import Modal, { ModalPropTypes } from "./components/Modal/Modal";

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

  const tabsData: TabsProps = {
    tabData: {
      tabID: "cookiesTabs",
      items: [
        {
          component: <Cookies />,
          tabName: "Consent",
          disable: false,
        },
        {
          tabName: "Details",
          text: "some text Details",
        },
        {
          tabName: "About",
          disable: false,
          text: "some text About cookies",
          active: true,
        },
      ],
    },
  };

  const modalSetup: ModalPropTypes = {
    modalData: {
      modalName: {
        name: "cookies",
        button: true,
      },
    },
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

      <Modal modalData={modalSetup.modalData}>
        <Tabs tabData={tabsData?.tabData} />
      </Modal>
    </div>
  );
};

export default App;
