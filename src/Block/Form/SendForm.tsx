import UIkit from "uikit";
import emailjs from "@emailjs/browser";
import { Inputs } from "../../components/FormInput/FormInput";

interface SendFormParamsTypes {
  reset: () => void;
  data: Inputs;
  responseMessage: {
    success: string;
    error: string;
  };
}

export const sendForm = ({
  reset,
  data,
  responseMessage,
}: SendFormParamsTypes): void => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID as string;
  const KEY_PUBLIC = import.meta.env.VITE_KEY_PUBLIC as string;

  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, KEY_PUBLIC).then(
    (res) => {
      if (res.status === 200) {
        reset();
        UIkit.notification({
          message: responseMessage?.success,
          status: "primary",
          pos: "top-center",
        });
      }
    },
    () => {
      UIkit.notification({
        message: responseMessage?.error,
        status: "danger",
        pos: "top-center",
        timeout: 5000,
      });
    }
  );
};
