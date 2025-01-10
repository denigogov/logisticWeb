import { useTranslation } from "react-i18next";
import ContactForm from "../../components/form/ContactForm";
import { getFormData } from "./form.data";

const Form: React.FC = () => {
  const { t } = useTranslation();
  const formData = getFormData(t);

  return (
    <div>
      <ContactForm formData={formData} />
    </div>
  );
};

export default Form;
