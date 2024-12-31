import Button from "../Button/Button";
import { ButtonPropertys } from "../Button/button.types";
import "./_errorDisplay.scss";

export type ErrorTypes = {
  codeStatus?: string;
  messageSubTitle?: string;
  messageTitle1?: string;
  messageHighlight?: string;
  messageTitle2?: string;
  buttonContact?: ButtonPropertys;
  buttonHome?: ButtonPropertys;
};

interface ErrorDisplayProps {
  errorDispalyData?: ErrorTypes;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errorDispalyData }) => {
  return (
    <div className="errorDisplay">
      <p className="errorDisplay__status">{errorDispalyData?.codeStatus}</p>

      <div className="errorDisplay__text">
        <h1 className="errorDisplay__text-title">
          {errorDispalyData?.messageTitle1 ?? ""}{" "}
          <span className="highlight">
            {errorDispalyData?.messageHighlight ?? ""}
          </span>{" "}
          {errorDispalyData?.messageTitle2 ?? ""}
        </h1>
        {errorDispalyData?.messageSubTitle && (
          <p className="errorDisplay__text-message ">
            {errorDispalyData?.messageSubTitle}
          </p>
        )}
      </div>

      <div className="errorDisplay__button">
        {errorDispalyData?.buttonHome && (
          <Button buttonData={errorDispalyData?.buttonContact} />
        )}
        {errorDispalyData?.buttonHome && (
          <Button buttonData={errorDispalyData?.buttonHome} />
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
