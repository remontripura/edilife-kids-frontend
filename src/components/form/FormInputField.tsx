import { TInputProps } from "@/types/InputFields/InputFields";
import {  useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInputField = ({
  name,
  type,
  className,
  placeholder,
  defaultValue,
  required,
  maxlength,
  title,
  onChange,
  readOnly,
  disabled,
  star,
}: TInputProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div
          className={` ${
            type === "checkbox" ? "flex flex-row-reverse justify-end gap-3" : ""
          }`}
        >
          {title ? (
            <p className="text-white1 text-[16px] mb-1 font-medium">
              {title}
              {star === true && <span className="text-red-500">*</span>}
            </p>
          ) : (
            ""
          )}
          <div className="relative">
            <input
              {...field}
              type={isPasswordField && showPassword ? "text" : type}
              className={`px-3 bg-transperant w-full border border-border1 focus:outline-none focus:border-primary rounded-md py-1 text-white1 ${className}`}
              placeholder={placeholder}
              required={required}
              maxLength={maxlength}
              readOnly={readOnly}
              disabled={disabled}
              onKeyDown={(e) => {
                if (type === "number") {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }
              }}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
            />
            {isPasswordField && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none focus:border-primary "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            )}
          </div>

          {error && type !== "checkbox" && (
            <span className="text-[#e82828] text-[14px]">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default FormInputField;
