import "./_navItems.scss";
import logo from "../../../../assets/logo.svg";
import Button from "../../../Button/Button";

import React from "react";
import { NavData } from "./navitem.data";
import LanguageSwitch from "../../../LanguageSwitcher/LanguageSwitch";

interface NavItemsProps {
  aditionalClass?: string;
  navigation: NavData;
}

const NavItems: React.FC<NavItemsProps> = ({ aditionalClass, navigation }) => {
  const buttonData = navigation?.navbar?.button ?? {};
  const navItems = navigation?.navbar?.navItems ?? [];

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
                <li>{items.label}</li>
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
