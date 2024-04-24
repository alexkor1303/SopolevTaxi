import style from "./HeaderLinkElem.module.scss";
interface LinkElemProps {
  key: number;
  link: string;
  text: string;
}
export const HeaderLinkElem = ({
  key,
  link,
  text,
}: LinkElemProps): JSX.Element => {
  return (
    <a className={style.link} key={key} href={link}>
      {text}
    </a>
  );
};
