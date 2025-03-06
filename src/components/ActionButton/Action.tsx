import s from './ActionButton.module.scss'

type Props = {
  button: string;
  onClick: () => void;
};

export const Action: React.FC<Props> = ({ button, onClick }) => {
  return <button className={s.button} onClick={() => onClick()}>{button}</button>;
};
