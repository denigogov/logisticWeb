import { CookiePreferenceKeysType } from "../../hooks/DataContext.types";
import "./_toggleButton.scss";

export type toggleButtonTypes = {
  label?: string;
  active?: boolean;
  disable?: boolean;
  onClick?: (e?: any) => void;
  uniqueId: string;
};

interface ToggleButtonProps {
  toggleButtonSetup?: toggleButtonTypes;
  onToggleChange: (id: CookiePreferenceKeysType) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggleButtonSetup,
  onToggleChange,
}) => {
  // const isActive = cookieSelected.includes(toggleButtonSetup?.uniqueId || "");

  const clickOnInputInitial = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target?.id as CookiePreferenceKeysType;

    if (id) {
      onToggleChange(id);
    }
  };

  return (
    <div className="toggleButton ">
      <div
        className={`toggleButton__wrapper ${
          toggleButtonSetup?.active ? "toggleButton-active" : ""
        }`}
      >
        <p className="toggleButton__label">{toggleButtonSetup?.label}</p>
        <input
          disabled={toggleButtonSetup?.disable}
          onChange={clickOnInputInitial}
          type="checkbox"
          id={toggleButtonSetup?.uniqueId}
          checked={toggleButtonSetup?.active ?? false}
        />
        <label htmlFor={toggleButtonSetup?.uniqueId}></label>
      </div>
    </div>
  );
};

export default ToggleButton;
