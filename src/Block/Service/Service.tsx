import Card from "../../components/Card/Card";
import "./_services.scss";
import { getServiceData } from "./service.data";
import { useTranslation } from "react-i18next";
import React from "react";

const Service: React.FC = () => {
  const { t } = useTranslation();

  const serviceData = getServiceData(t);

  return (
    <section className="uk-section uk-container uk-container-expand  service ">
      {serviceData?.title && (
        <h1 className="uk-heading-medium uk-text-center uk-heading-bullet service__title ">
          {serviceData?.title}
        </h1>
      )}

      <div className=" uk-child-width-1-3@m uk-grid-match service__items">
        {serviceData?.card?.map((arr, i) => (
          <React.Fragment key={i}>
            <Card cardData={arr} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Service;
