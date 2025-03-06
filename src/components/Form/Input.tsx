import style from "./Form.module.scss";

type Props = {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  isValid: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  value,
  label,
  isValid,
  onChange,
}) => {
  return (
    <label>
      {label}
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={isValid ? style.invalid_input : ""}
      />
      {isValid && (
        <span className={style.invalid_message}>Field can not be empty</span>
      )}
    </label>
  );
};
