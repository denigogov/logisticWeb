import { ButtonPropertys } from "../../Button/button.types";

export interface HeroTypesData {
  hero: {
    buttons: ButtonPropertys[];
    text: {
      top: string;
      highlight: string;
      middle: string;
      copy: string;
    };
  };
}

const heroData: HeroTypesData = {
  hero: {
    buttons: [
      {
        label: "Start for free",
        size: "medium",
        type: "default",
        className: "",
      },

      {
        label: "Learn more",
        size: "medium",
        type: "default",
        className: "",
      },
    ],
    text: {
      top: "Kopakt. Flexibel.",
      highlight: "Immer",
      middle: " punktilich.",
      copy: "Effizient. Flexibel. Termingerecht. Mit innovativen Lösungen bringen wir Ihre Waren ans Ziel.",
    },
  },
};

export default heroData;
