import { NavData } from "../../components/HeaderComponents/Navbar/NavItems/navitem.data";

export const getNavigationData = (t: (key: string) => string): NavData => ({
  navbar: {
    button: {
      label: t("header.button.label"),
      size: "medium",
      type: "secondary",
      className: "",
    },
    navItems: [
      { label: t("header.navItems.home") },
      { label: t("header.navItems.about") },
      { label: t("header.navItems.services") },
      { label: t("header.navItems.contact") },
    ],
  },
});

export const getHeroData = (t: (key: string) => string): any => ({});
