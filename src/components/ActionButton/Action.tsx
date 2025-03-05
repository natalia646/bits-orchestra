type Props = {
  button: string;
  onClick: () => void;
};

export const Action: React.FC<Props> = ({ button, onClick }) => {
  return <button onClick={() => onClick()}>{button}</button>;
};
