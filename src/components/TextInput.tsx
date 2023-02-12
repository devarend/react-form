import { FC, memo } from "react";

const TextInput: FC<TextInputProps> = memo(
  ({
    label,
    placeholder,
    name,
    value,
    error,
    style,
    onChange,
    fieldIndex,
    index,
  }) => {
    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          placeholder={placeholder}
          value={value}
          name={name}
          style={style}
          onChange={(event) => onChange(event.target.value, fieldIndex, index)}
        />
      </>
    );
  }
);

interface TextInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  error?: string;
  style?: object;
  fieldIndex: number;
  index: number;

  onChange(value: string, fieldIndex: number, index: number): void;
}

export default TextInput;
