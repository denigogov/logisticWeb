import hambMenuIcon from "../../../assets/hamburger-menu-svgrepo-com.svg";
import "./_navbar.scss";
import { NavData } from "./NavItems/navitem.data";
import NavItems from "./NavItems/NavItems";

interface NavbarProps {
  navigation: NavData;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  return (
    <nav className="navBar">
      {/* MOBILE VIEW MENU */}
      <div className="navBar__menuIcon" uk-toggle="target: #offcanvas-navbar ">
        <img src={hambMenuIcon} alt={hambMenuIcon} />

        <p>
          All<strong>Transport</strong>
        </p>
      </div>

      <div id="offcanvas-navbar" uk-offcanvas="mode: push; overlay: true">
        <div className="uk-offcanvas-bar  uk-background-default navBar__mobileContent">
          <button
            className="uk-offcanvas-close "
            type="button"
            data-uk-close
          ></button>

          <NavItems navigation={navigation} />
        </div>
      </div>

      {/* MOBILE VIEW MENU END */}

      <NavItems aditionalClass="navbar__hideMobile" navigation={navigation} />
    </nav>
  );
};

export default Navbar;
