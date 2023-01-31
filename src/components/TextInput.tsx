import { ChangeEventHandler, FC } from "react";

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  name,
  value,
  error,
  style,
  onChange,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        style={style}
        onChange={onChange}
      />
    </>
  );
};

interface TextInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  error?: string;
  style?: object;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default TextInput;
