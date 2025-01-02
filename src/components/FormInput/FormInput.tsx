import "./_formInput.scss";
import Button from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTypes } from "../../Block/Form/form.data";
import Modal from "../Modal/Modal";
import PrivacyPolicy from "../../pages/PrivacyPolicy";

type Inputs = {
  fullname: string;
  email: string;
  phoneNumber: string;
  formMessage: string;
  privacyPolicy: boolean;
};

interface FormInputProps {
  inputData: Partial<FormTypes>;
}

const FormInput: React.FC<FormInputProps> = ({ inputData }) => {
  const inputLabelData = inputData?.formInputs;

  const {
    register,
    handleSubmit,
    watch,
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
      </form>
    </div>
  );
};

export default FormInput;
