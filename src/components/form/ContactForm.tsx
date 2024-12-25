import { FormTypes } from "../../Block/Form/form.data";
import FormInput from "../FormInput/FormInput";
import "./_contactForm.scss";

export interface FormTextTypes {
  titleTop?: string;
  titleBottom?: string;
  copy?: string;
}
interface ContactFormProps {
  formData: FormTypes;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData }) => {
  return (
    <div className="form uk-container-expand uk-container uk-container-expand  uk-section uk-flex-around uk-flex  uk-flex-column uk-flex-row@m uk-flex-middle	">
      <div className="form__card">
        <div>
          <h1 className="uk-heading-medium form__card-title ">
            {formData?.formText?.titleTop && (
              <span className="uk-heading-bullet">
                {formData?.formText?.titleTop}
              </span>
            )}
            <br />

            {formData?.formText?.titleBottom && formData?.formText?.titleBottom}
          </h1>
          {formData?.formText?.copy && (
            <p className="form__card-text uk-text-left">
              {formData?.formText?.copy}
            </p>
          )}
        </div>
      </div>
      <FormInput inputData={formData} />
    </div>
  );
};

export default ContactForm;
