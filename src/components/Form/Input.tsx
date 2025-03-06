type Props = {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  value,
  label,
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
        required
      />
    </label>
  );
};
