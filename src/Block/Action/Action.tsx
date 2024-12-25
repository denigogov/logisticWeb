import { useTranslation } from "react-i18next";
import Cta from "../../components/CTA/Cta";
import { ActionTypes, getActionData } from "./action.data";

const Action: React.FC = () => {
  const { t } = useTranslation();

  const data: ActionTypes = getActionData(t);

  return (
    <section>
      <Cta ctaData={data?.cta} />
    </section>
  );
};

export default Action;
