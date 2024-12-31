import "./_navItems.scss";
import logo from "../../../../assets/logo.svg";
import Button from "../../../Button/Button";

import React from "react";
import { NavData } from "./navitem.data";
import LanguageSwitch from "../../../LanguageSwitcher/LanguageSwitch";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface NavItemsProps {
  aditionalClass?: string;
  navigation: NavData;
  handleCloseOffcanvas?: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({
  aditionalClass,
  navigation,
  handleCloseOffcanvas,
}) => {
  const buttonData = navigation?.navbar?.button ?? {};
  const navItems = navigation?.navbar?.navItems ?? [];

  const location = useLocation();
  const redirect = useNavigate();

  const redirectToHome = () => {
    const currentPath = location.pathname;
    if (currentPath === "/legal-notice" || currentPath === "/privacy") {
      redirect("/");
    }
  };

  const handleNavClick = (routePath: string | undefined) => {
    if (
      routePath === "/" ||
      location.pathname === "/legal-notice" ||
      location.pathname === "/privacy"
    ) {
      redirectToHome();
    }

    // Trigger additional behavior passed as props if any
    handleCloseOffcanvas?.();
  };

  return (
    <div className={`navItems  ${aditionalClass}`}>
      <div className="navItems__logo">
        <img src={logo} alt={logo} />
        <p className="navItems__logo-slogan">
          pako-s <strong>transporte</strong>
        </p>
      </div>
      {navItems.length > 0 && (
        <div className="navItems__list">
          <ul>
            {navItems.map((items, i) => (
              <React.Fragment key={i}>
                <li onClick={() => handleNavClick(items?.active?.routePath)}>
                  {items?.active?.routePath.startsWith("#") ? (
                    <a href={items.active.routePath}>{items.label}</a>
                  ) : (
                    <NavLink to={items.active?.routePath ?? ""}>
                      {items.label}
                    </NavLink>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}

      <div className="navItems__contactBtn">
        {Object.keys(buttonData).length !== 0 && (
          <Button buttonData={buttonData} />
        )}
        <LanguageSwitch />
      </div>
    </div>
  );
};

export default NavItems;
