import { HTMLInputTypeAttribute } from "react";

export type TInputProps = {
    name: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    maxlength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title?: string;
    readOnly?: boolean | undefined;
    disabled?: boolean;
    star?: boolean;
  };
  