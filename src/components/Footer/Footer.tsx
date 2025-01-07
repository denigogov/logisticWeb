import { NavLink } from "react-router-dom";
import { FooterSectionTypes } from "../../Block/FooterSection/footerSection.data";
import "./_footer.scss";
import Cookies from "../../Block/Cookies/Cookies";
import { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";
interface FooterProps {
  footerData: FooterSectionTypes;
}

export type FooterDataType = {
  name: string;
  router?: string;
  blankPage?: boolean;
};

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  console.log(modalShow);

  const { cookiePreference } = useData();
  const cookies = cookiePreference?.required;

  useEffect(() => {
    if (!cookies) {
      setModalShow(true);
    }
  }, [cookies]);

  const handleCookies = (footerData: FooterDataType) => {
    if (footerData.router === "/") {
      setModalShow(true);
    }
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer uk-container  uk-container-expand  uk-section uk-flex  uk-flex-between  uk-flex-column uk-flex-row@m uk-padding-small uk-flex-middle">
      <div className="footer__links uk-width-1-3@m uk-flex  uk-flex-between">
        {footerData?.footerItems?.map((link, i) => (
          <NavLink key={i} to={link?.router ?? ""}>
            <p
              className="footer__links-items uk-text-meta"
              onClick={() => handleCookies(link)}
            >
              {link?.name ?? ""}
            </p>
          </NavLink>
        ))}
        {/* {!cookies && <Cookies />}
        {modalShow && <Cookies />} */}
        {modalShow && <Cookies onClose={handleCloseModal} />}{" "}
        {/* Pass close handler */}
      </div>

      <div className="footer__logo">
        <p className="uk-text-meta footer__logo-item">
          © {currentYear} Pako-S Transporte
        </p>
      </div>
    </footer>
  );
};

export default Footer;
