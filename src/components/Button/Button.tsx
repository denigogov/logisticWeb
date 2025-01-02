import "./_button.scss";
import { ButtonTypes } from "./button.types";

const Button: React.FC<ButtonTypes> = ({ buttonData }) => {
  return (
    <div className={`${buttonData?.className ?? ""} button`}>
      {buttonData?.label && (
        <button
          className={` uk-button  uk-button-${
            buttonData?.size ?? ""
          } uk-button-${buttonData?.type ?? ""}`}
          onClick={buttonData?.onClick}
        >
          {buttonData?.label ?? ""}
        </button>
      )}
    </div>
  );
};

export default Button;
