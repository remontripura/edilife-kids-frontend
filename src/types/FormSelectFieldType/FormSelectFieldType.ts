export type TOption = {
  label: string;
  value: string;
};

export type TSelectProps = {
  name: string;
  className?: string;
  options: TOption[];
  placeholder?: string;
  required?: boolean;
  type?: string | undefined;
  onChange?: (value: string) => void;
  defaultValue?: number | null;
};
