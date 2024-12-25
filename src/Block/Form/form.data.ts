import { ButtonTypes } from "../../components/Button/button.types";
import { FormTextTypes } from "../../components/form/ContactForm";

export interface FormIntputs {
  label?: string;
  required?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
}

export interface FormTypes {
  formText: FormTextTypes;
  formInputs: {
    fullName: FormIntputs;
    email: FormIntputs;
    phoneNumber: FormIntputs;
    formMessage: FormIntputs;
    privacyPolicy: {
      required?: string;
      policyText: {
        first?: string;
        highlight?: string;
        textRest?: string;
      };
    };

    button: ButtonTypes;
  };
}

export const getFormData = (t: (key: string) => string): FormTypes => ({
  formText: {
    titleTop: t("form.formText.titleTop"),
    titleBottom: t("form.formText.titleBottom"),
    copy: t("form.formText.copy"),
  },

  formInputs: {
    button: {
      label: t("form.formInputs.button.label"),
      type: "secondary",
      size: "medium",
      className: "form__button",
    },

    fullName: {
      label: t("form.formInputs.fullName.label"),
      required: t("form.formInputs.fullName.required"),
      minLength: t("form.formInputs.fullName.minLength"),
      maxLength: t("form.formInputs.fullName.maxLength"),
    },

    email: {
      label: t("form.formInputs.email.label"),
      required: t("form.formInputs.email.required"),
      minLength: t("form.formInputs.email.minLength"),
      maxLength: t("form.formInputs.email.maxLength"),
      pattern: t("form.formInputs.email.pattern"),
    },

    phoneNumber: {
      label: t("form.formInputs.phoneNumber.label"),
      // required: t("form.formInputs.phoneNumber.required"),
      minLength: t("form.formInputs.phoneNumber.minLength"),
      maxLength: t("form.formInputs.phoneNumber.maxLength"),
      pattern: t("form.formInputs.phoneNumber.pattern"),
    },

    formMessage: {
      label: t("form.formInputs.message.label"),
      required: t("form.formInputs.message.required"),
      minLength: t("form.formInputs.message.minLength"),
      maxLength: t("form.formInputs.message.maxLength"),
    },

    privacyPolicy: {
      required: t("form.formInputs.privacyPolicy.required"),
      policyText: {
        first: t("form.formInputs.privacyPolicy.text.first"),
        highlight: t("form.formInputs.privacyPolicy.text.highlight"),
        textRest: t("form.formInputs.privacyPolicy.text.textRest"),
      },
    },
  },
});

// formText: {
//     titleTop: "Get In Touch",
//     titleBottom: "With Us Now",
//     copy: `Reach out to us today and let's start a conversation about how we can help you achieve your goals.`,
//   },

//   formInputs: {
//     button: {
//       label: "Send Message",
//       type: "secondary",
//       size: "medium",
//       className: "form__button",
//     },

//     fullName: {
//       label: "Full Name",
//       required: "Full Name is required.",
//       minLength: "Full Name should be at least 4 characters long.",
//       maxLength: "Full Name should not exceed 30 characters.",
//     },

//     email: {
//       label: "Email",
//       required: "Email is required.",
//       pattern: "Please enter a valid email address.",
//       minLength: "Email should be at least 5 characters long.",
//       maxLength: "Email should not exceed 50 characters.",
//     },

//     phoneNumber: {
//       label: "Phone Number",
//       //   required: "Phone Number is required.",
//       minLength: "Phone number should be at least 7 characters long.",
//       maxLength: "Phone number should not exceed 15 characters.",
//       pattern:
//         "Phone number should contain only numbers and an optional '+' at the beginning.",
//     },

//     formMessage: {
//       label: "Your Message",
//       required: "Message is required.",
//       minLength: "Message should be at least 20 characters long.",
//       maxLength: "Message should not exceed 1000 characters.",
//     },

//     privacyPolicy: {
//       required: "Please confirm this required field.",
//       policyText: {
//         first: "I agree to the",
//         highlight: "Privacy Policy",
//         textRest:
//           "and consent to the processing of my personal data for the purpose of this inquiry.",
//       },
//     },
//   }
