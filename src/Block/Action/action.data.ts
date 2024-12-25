import CtaTypes from "../../components/CTA/cta.types";

export interface ActionTypes {
  cta: CtaTypes;
}

export const getActionData = (t: (key: string) => string): ActionTypes => ({
  cta: {
    titleTop: t("action.ctaData.titleTop"),
    titleBottom: t("action.ctaData.titleBottom"),
    button: {
      label: t("action.ctaData.button.label"),
      type: "danger",
      size: "large",
      className: "cta__button",
    },
  },
});
