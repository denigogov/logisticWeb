import "./_formInput.scss";
import Button from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTypes } from "../../Block/Form/form.data";
import Modal from "../Modal/Modal";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import { sendForm } from "../../Block/Form/SendForm";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useRef, useState } from "react";
import { useData } from "../../hooks/useData";
import { loadReCAPTCHA } from "../../utils/reCaptcha";





export type Inputs = {
  fullname: string;
  email: string;
  phoneNumber: string;
  formMessage: string;
  privacyPolicy: boolean;
};

interface FormInputProps {
  inputData: Partial<FormTypes>;
}

const RECHAPTA_SITE_KEY = import.meta.env.VITE_GOOGLE_RECHAPTA_KEY as string;

const FormInput: React.FC<FormInputProps> = ({ inputData }) => {


  const recaptchaRef = useRef<ReCAPTCHA | null>(null);



  const inputLabelData = inputData?.formInputs;
  const { t } = useTranslation();


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      fullname: "",
      phoneNumber: "",
      formMessage: "",
      privacyPolicy: false,
    },
  });


  const { cookiePreference } = useData();
  const cookiesAccepted  = cookiePreference?.required;
  const [recaptchaLoaded, setRecaptchaLoaded] = useState<boolean>(false);





  useEffect(() => {
    if (cookiesAccepted && !recaptchaLoaded) {
      loadReCAPTCHA({setRecaptchaLoaded});
    }
  }, [cookiesAccepted, recaptchaLoaded]);


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
  
      const token = await recaptchaRef?.current?.executeAsync();
      recaptchaRef?.current?.reset(); 
  
      if (!token)  return;
      
  
     
      const formData = {
        ...data,
        "g-recaptcha-response": token, 
      };


      console.log(formData);
  
     
      sendForm({
        reset,
        data: formData, 
        responseMessage: {
          success: t("form.sendForm.success"),
          error: t("form.sendForm.error"),
        },
      });
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="formInput">
      <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <input
            {...register("fullname", {
              required: inputLabelData?.fullName?.required,
              maxLength: {
                value: 30,
                message: inputLabelData?.fullName?.maxLength ?? "",
              },
              minLength: {
                value: 4,
                message: inputLabelData?.fullName?.minLength ?? "",
              },
            })}
            type="text"
            className={`input-field ${watch("fullname") ? "form__valid" : ""}`}
          />
          <label className="input-label">
            {inputLabelData?.fullName?.label}
          </label>
        </div>
        {errors.fullname && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.fullname?.message}
          </p>
        )}

        <div className="input">
          <input
            {...register("email", {
              required: inputLabelData?.email?.required,

              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: inputLabelData?.email?.pattern ?? "",
              },
              maxLength: {
                value: 50,
                message: inputLabelData?.email?.maxLength ?? "",
              },
              minLength: {
                value: 5,
                message: inputLabelData?.email?.minLength ?? "",
              },
            })}
            type="text"
            className={`input-field ${watch("email") ? "form__valid" : ""}`}
          />
          <label className="input-label">{inputLabelData?.email?.label}</label>
        </div>
        {errors.email && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.email?.message}
          </p>
        )}

        <div className="input">
          <input
            {...register("phoneNumber", {
              maxLength: {
                value: 15,
                message: inputLabelData?.phoneNumber?.maxLength ?? "",
              },
              minLength: {
                value: 7,
                message: inputLabelData?.phoneNumber?.minLength ?? "",
              },
              pattern: {
                value: /^[+]?[0-9]{7,15}$/,
                message: inputLabelData?.phoneNumber?.pattern ?? "",
              },
            })}
            type="tel"
            className={`input-field ${
              watch("phoneNumber") ? "form__valid" : ""
            }`}
          />
          <label className="input-label">
            {inputLabelData?.phoneNumber.label}
          </label>
        </div>
        {errors.phoneNumber && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.phoneNumber.message}
          </p>
        )}

        <div className="input">
          <textarea
            {...register("formMessage", {
              required: inputLabelData?.formMessage?.required,
              maxLength: {
                value: 1000,
                message: inputLabelData?.formMessage?.maxLength ?? "",
              },
              minLength: {
                value: 20,
                message: inputLabelData?.formMessage?.minLength ?? "",
              },
            })}
            className={`input-field ${
              watch("formMessage") ? "form__valid" : ""
            }`}
          />
          <label className="input-label">
            {inputLabelData?.formMessage?.label}
          </label>
        </div>
        {errors.formMessage && (
          <p className="form__input-error uk-text-meta uk-text-danger">
            {errors.formMessage.message}
          </p>
        )}

        <div className="uk-padding-small uk-padding-remove-left">
          <div className="uk-flex" style={{ gap: "10px" }}>
            <input
              {...register("privacyPolicy", {
                required: inputLabelData?.privacyPolicy?.required,
              })}
              type="checkbox"
            />
            {inputLabelData?.privacyPolicy && (
              <Modal modalData={inputData?.modalSetup?.modalData ?? {}}>
                <PrivacyPolicy privacySetup={inputData?.privacySetup ?? {}} />
              </Modal>
            )}
          </div>
          {errors.privacyPolicy && (
            <p className="form__input-error uk-text-meta uk-text-danger">
              {errors?.privacyPolicy?.message}
            </p>
          )}
        </div>

        <div>
          <Button buttonData={inputLabelData?.button} />
        </div>


        {cookiesAccepted && recaptchaLoaded && (
          <>
          <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={RECHAPTA_SITE_KEY}
          className="custom-recaptcha"
          />

{/* <p className="uk-text-meta uk-text-break">Diese Website ist durch reCAPTCHA geschützt und es gelten die <a className="uk-text-primary"  target='_blank' href="https://policies.google.com/privacy">Datenschutzbestimmungen</a>  und <a  className="uk-text-primary"  target='_blank' href="https://policies.google.com/terms">Nutzungsbedingungen</a>  von Google.</p> */}

<p className="uk-text-meta uk-text-break">{t('form.formInputs.reChapcta.firstText')} <a className="uk-text-primary"  target='_blank' href="https://policies.google.com/privacy">{t('form.formInputs.reChapcta.privacyLinkText')}</a>  {t('form.formInputs.reChapcta.and')} <a  className="uk-text-primary"  target='_blank' href="https://policies.google.com/terms">{t('form.formInputs.reChapcta.secondLinkText')}</a>  {t('form.formInputs.reChapcta.endText')}</p>
          </>

          
        )}




      

        
      </form>
    </div>
  );
};

export default FormInput;
