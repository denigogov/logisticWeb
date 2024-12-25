import HomeLocationIcon from "../../assets/Homelocationicon.svg";
import FlagLocationIcon from "../../assets/flagLocation.svg";
import WeightIcon from "../../assets/weightIcon.svg";
import DeliveryTimeIcon from "../../assets/deliveryTimeIcon.svg";
import { BulletPoint } from "../../components/BulletpointList/BulletpointList.types";
import { ContentDataTypes } from "../../components/Content/content.types";

export interface AboutUsTypes {
  bulletPointData: BulletPoint[];
  contentData: ContentDataTypes;
}

export const getAboutUsData = (t: (key: string) => string): AboutUsTypes => ({
  bulletPointData: [
    {
      icon: {
        backgroundColor: true,
        iconName: HomeLocationIcon,
      },
      title: {
        name: t("aboutUs.bulletPoints.base.name"),
        text: t("aboutUs.bulletPoints.base.text"),
      },
      copy: t("aboutUs.bulletPoints.base.copy"),
      highlight: false,
    },
    {
      icon: {
        backgroundColor: true,
        iconName: FlagLocationIcon,
      },
      title: {
        name: t("aboutUs.bulletPoints.operatingLocation.name"),
        text: t("aboutUs.bulletPoints.operatingLocation.text"),
      },
      copy: t("aboutUs.bulletPoints.operatingLocation.copy"),
      highlight: false,
    },
    {
      icon: {
        backgroundColor: true,
        iconName: WeightIcon,
      },
      title: {
        name: t("aboutUs.bulletPoints.maxWeight.name"),
        text: t("aboutUs.bulletPoints.maxWeight.text"),
      },
      copy: t("aboutUs.bulletPoints.maxWeight.copy"),
      highlight: false,
    },
    {
      icon: {
        backgroundColor: true,
        iconName: DeliveryTimeIcon,
      },
      title: {
        name: t("aboutUs.bulletPoints.deliverySpeed.name"),
        text: t("aboutUs.bulletPoints.deliverySpeed.text"),
      },
      copy: t("aboutUs.bulletPoints.deliverySpeed.copy"),
      highlight: false,
    },
  ],

  contentData: {
    title: t("aboutUs.contentData.title"),
    subTitle: t("aboutUs.contentData.subTitle"),
    text: t("aboutUs.contentData.text"),
  },
});
