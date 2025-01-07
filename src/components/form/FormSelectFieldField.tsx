import { Controller, useFormContext } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { useState } from "react";
import {
  TOption,
  TSelectProps,
} from "@/types/FormSelectFieldType/FormSelectFieldType";

const FormSelectField = ({
  name,
  options,
  placeholder,
  required,
  onChange,
  defaultValue = 1,
}: TSelectProps) => {

  
  const { control } = useFormContext();
  const [selectedOption, setSelectedOption] = useState<TOption | null>(
    options && options.length > 0 && defaultValue !== null
      ? options[defaultValue]
      : null
  );

  const customStyles: StylesConfig<TOption, false> = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#FFB70A" : provided.borderColor,
    }),
  };
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={selectedOption?.value || ""}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          styles={customStyles}
          value={selectedOption}
          onChange={(option) => {
            const selectedOption = option as TOption;
            setSelectedOption(selectedOption);
            field.onChange(selectedOption?.value);
            if (onChange) onChange(selectedOption.value);
          }}
          isClearable={!required}
        />
      )}
    />
  );
};

export default FormSelectField;
