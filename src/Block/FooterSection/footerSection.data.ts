import { FooterDataType } from "../../components/Footer/Footer";

export interface FooterSectionTypes {
  footerItems: FooterDataType[];
}

export const getFooterData = (
  t: (key: string) => string
): FooterSectionTypes => ({
  footerItems: [
    {
      name: t("footer.item.privacy"),
      blankPage: true,
      router: "/privacy",
    },

    {
      name: t("footer.item.cookiesSetup"),
      blankPage: true,
      router: "cookies-setup",
      // maybe I need popup
    },

    {
      name: t("footer.item.ownerData"),
      blankPage: true,
      router: "/legal-notice",
    },
  ],
});
