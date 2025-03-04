type Props = {
  button: string;
  bookId: string;
  onClick: () => void;
};

export const Action: React.FC<Props> = ({ button, bookId, onClick }) => {
  return <button onClick={() => onClick()}>{button}</button>;
};
