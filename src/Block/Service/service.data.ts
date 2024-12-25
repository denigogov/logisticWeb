import CardTypes from "../../components/Card/card.types";
import photoService1 from "../../assets/card/CardImage1 Pako-S Transporte.png";
import photoService2 from "../../assets/card/cardWithCopanyName.png";
import photoService4 from "../../assets/card/cardImage3.jpg";

export interface ServiceTypes {
  title?: string;
  card: CardTypes[];
}
// titleTop: t("action.ctaData.titleTop"),
export const getServiceData = (t: (key: string) => string): ServiceTypes => ({
  title: t("service.title"),
  card: [
    {
      image: photoService1,
      text: t("service.card.text"),
      hoverText: t("service.card.hoverText"),
    },
    {
      image: photoService2,
      text: t("service.card.text1"),
      hoverText: t("service.card.hoverText1"),
    },
    {
      image: photoService4,
      text: t("service.card.text2"),
      hoverText: t("service.card.hoverText2"),
    },
  ],
});
