import Button from "../Button/Button";
import { ButtonPropertys } from "../Button/button.types";
import "./_contactForm.scss";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const buttonExmaple: ButtonPropertys = {
    label: "Send Message",
    type: "secondary",
    size: "medium",
    className: "form__button",
  };

  return (
    <div className="form uk-container-expand uk-container uk-container-expand  uk-section uk-flex-around uk-flex  uk-flex-column uk-flex-row@m uk-flex-middle	">
      <div className="form__card">
        <div>
          <h1 className="uk-heading-medium form__card-title ">
            <span className="uk-heading-bullet">Get In Touch</span>
            <br />
            With Us Now
          </h1>
          <p className="form__card-text uk-text-left">
            Reach out to us today and let's start a conversation about how we
            can help you achieve your goals.
          </p>
        </div>
      </div>
      <form className="form__wrapper">
        <div className="input">
          <input type="text" className="input-field" required />
          <label className="input-label">Full name</label>
        </div>
        <p className="form__input-error uk-text-meta uk-text-danger">
          Full Name should be min 4 letters
        </p>
        <div className="input">
          <input type="text" className="input-field" required />
          <label className="input-label">Email</label>
        </div>
        <div className="input">
          <input type="tel" className="input-field" required />
          <label className="input-label">Phone Number</label>
        </div>

        <div className="input">
          <textarea className="input-field" required />
          <label className="input-label">Your Message</label>
        </div>

        <div className="uk-padding-small uk-padding-remove-left">
          <div className="uk-flex" style={{ gap: "10px" }}>
            <input type="checkbox" />{" "}
            <p className="uk-text-meta">
              I agree to the{" "}
              <a className="uk-text-primary" href="#">
                Privacy Policy{" "}
              </a>{" "}
              and consent to the processing of my personal data for the purpose
              of this inquiry.
            </p>
          </div>
        </div>

        <div>
          <Button buttonData={buttonExmaple} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
