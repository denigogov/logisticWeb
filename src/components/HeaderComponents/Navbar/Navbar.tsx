import { Outlet } from "react-router-dom";
import hambMenuIcon from "../../../assets/hamburger-menu-svgrepo-com.svg";
import "./_navbar.scss";
import { NavData } from "./NavItems/navitem.data";
import NavItems from "./NavItems/NavItems";
import UIkit from "uikit";

interface NavbarProps {
  navigation: NavData;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  //
  //

  const handleCloseOffcanvas = () => {
    UIkit.offcanvas("#offcanvas-navbar").hide();
  };

  return (
    <nav>
      <div className="navBar">
        {/* MOBILE VIEW MENU */}
        <div className="navBar__menuIcon" uk-toggle="target: #offcanvas-navbar">
          <img src={hambMenuIcon} alt={hambMenuIcon} />

          <p>
            pako-s<strong>transporte</strong>
          </p>
        </div>

        <div id="offcanvas-navbar" uk-offcanvas="mode: push; overlay: true">
          <div className="uk-offcanvas-bar  uk-background-default navBar__mobileContent">
            <button
              className="uk-offcanvas-close "
              type="button"
              data-uk-close
            ></button>

            <NavItems
              navigation={navigation}
              handleCloseOffcanvas={handleCloseOffcanvas}
            />
          </div>
        </div>

        {/* MOBILE VIEW MENU END */}
        <NavItems
          aditionalClass="navbar__hideMobile"
          navigation={navigation}
          handleCloseOffcanvas={handleCloseOffcanvas}
        />
      </div>

      {/* NAV BAR AS MAIN COMPONENT WHICH WILL BE ALL THE TIME DISPLAYED !  */}
      <main>
        <Outlet />
      </main>
    </nav>
  );
};

export default Navbar;
