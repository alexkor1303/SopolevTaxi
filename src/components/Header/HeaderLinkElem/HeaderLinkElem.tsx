import style from "./HeaderLinkElem.module.scss";
interface LinkElemProps {
  id: number;
  link: string;
  text: string;
}
export const HeaderLinkElem = ({
  id,
  link,
  text,
}: LinkElemProps): JSX.Element => {
  return (
    <a className={style.link} key={id} href={link}>
      {text}
    </a>
  );
};
