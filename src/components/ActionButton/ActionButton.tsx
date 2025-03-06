import style from './ActionButton.module.scss'

type Props = {
  button: string;
  onClick: () => void;
};

export const ActionButton: React.FC<Props> = ({ button, onClick }) => {
  return <button className={style.button} onClick={() => onClick()}>{button}</button>;
};
