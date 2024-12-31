import { HeroTypesData } from "../../components/HeaderComponents/Hero/hero.data";
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
      {
        label: t("header.navItems.home"),
        active: {
          routePath: "/",
        },
      },
      {
        label: t("header.navItems.about"),
        active: {
          routePath: "#about",
        },
      },
      {
        label: t("header.navItems.services"),
        active: {
          routePath: "#service",
        },
      },
      {
        label: t("header.navItems.contact"),
        active: {
          routePath: "#contact",
        },
      },
    ],
  },
});

export const getHeroData = (t: (key: string) => string): HeroTypesData => ({
  hero: {
    buttons: [
      {
        label: t("hero.button.labelHeroBtn"),
        size: "large",
        type: "secondary",
        className: "",
      },

      {
        label: t("hero.button.labelHeroBtn1"),
        size: "large",
        type: "default",
        className: "",
      },
    ],
    text: {
      top: t("hero.text.top"),
      highlight: t("hero.text.highlight"),
      middle: t("hero.text.middle"),
      copy: t("hero.text.copy"),
    },
  },
});
