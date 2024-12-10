import { ButtonTypes } from "../../../Button/button.types";

interface NavItemsType {
  label: string;
}

export interface NavData {
  navbar: {
    button?: ButtonTypes;
    navItems?: NavItemsType[];
  };
}

const navigationData: NavData = {
  navbar: {
    button: {
      label: "Jetzt Kontaktieren",
      size: "medium",
      type: "primary",
      className: "test",
    },

    navItems: [
      { label: "Home" },
      { label: "About" },
      { label: "Services" },
      { label: "Contact" },
    ],
  },
};

export default navigationData;
