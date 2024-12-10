export interface ButtonPropertys {
  label?: string;
  size?: "small" | "medium" | "large";
  type?: "default" | "primary" | "secondary" | "danger" | "text" | "link";
  className?: string;
}

export interface ButtonTypes extends ButtonPropertys {
  buttonData?: ButtonPropertys;
}
