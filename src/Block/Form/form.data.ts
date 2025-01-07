import { ButtonTypes } from "../../components/Button/button.types";
import { FormTextTypes } from "../../components/form/ContactForm";
import { ModalPropTypes } from "../../components/Modal/Modal";
import { PrivacyPolicyType } from "../../pages/PrivacyPolicy";

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
  modalSetup: ModalPropTypes;
  privacySetup: PrivacyPolicyType;
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

  modalSetup: {
    modalData: {
      // modalOpen: true,
      // modalBackgroundScroll: "hidden",

      modalName: {
        onlyText: {
          text: t("form.formInputs.privacyPolicy.text.first"),
          highlight: t("form.formInputs.privacyPolicy.text.highlight"),
          end: t("form.formInputs.privacyPolicy.text.textRest"),
        },
      },
    },
  },

  privacySetup: {
    disableScrollTop: true,
    hideFooter: true,
  },
});
