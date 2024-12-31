import { NavLink } from "react-router-dom";
import { FooterSectionTypes } from "../../Block/FooterSection/footerSection.data";
import "./_footer.scss";
interface FooterProps {
  footerData: FooterSectionTypes;
}

export type FooterDataType = {
  name: string;
  router?: string;
  blankPage?: boolean;
};

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer uk-container  uk-container-expand  uk-section uk-flex  uk-flex-between  uk-flex-column uk-flex-row@m uk-padding-small uk-flex-middle">
      <div className="footer__links uk-width-1-3@m uk-flex  uk-flex-between">
        {footerData?.footerItems?.map((link, i) => (
          <NavLink key={i} to={link?.router ?? ""}>
            <p className="footer__links-items uk-text-meta">
              {link?.name ?? ""}
            </p>
          </NavLink>
        ))}
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
