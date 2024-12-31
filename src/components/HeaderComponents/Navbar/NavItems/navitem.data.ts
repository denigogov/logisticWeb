import { ButtonTypes } from "../../../Button/button.types";

type LinkActiveType = {
  routePath: string;
};

interface NavItemsType {
  label: string;
  active?: LinkActiveType;
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
      {
        label: "Home",
        active: {
          routePath: "/",
        },
      },
      {
        label: "About",
        active: {
          routePath: "data",
        },
      },
      { label: "Services" },
      { label: "Contact" },
    ],
  },
};

export default navigationData;
